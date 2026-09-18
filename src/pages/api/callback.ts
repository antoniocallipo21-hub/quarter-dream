import type { APIRoute } from 'astro';

// Step 2: GitHub sends the browser back here with a one-time code. We
// exchange it server-side for an access token (using the client secret,
// which never reaches the browser) and hand it to the Decap CMS popup
// via postMessage, exactly as the Decap OAuth provider protocol expects.
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const code = url.searchParams.get('code');
  const clientId = import.meta.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = import.meta.env.OAUTH_GITHUB_CLIENT_SECRET;

  const renderMessage = (status: 'success' | 'error', payload: unknown) => `
    <!doctype html>
    <html>
      <body>
        <script>
          (function() {
            function receiveMessage(message) {
              window.opener.postMessage(
                'authorization:github:${status}:${JSON.stringify(payload).replace(/</g, '\\u003c')}',
                message.origin
              );
              window.removeEventListener('message', receiveMessage, false);
            }
            window.addEventListener('message', receiveMessage, false);
            window.opener.postMessage('authorizing:github', '*');
          })();
        </script>
      </body>
    </html>
  `;

  if (!code) {
    return new Response(renderMessage('error', { message: 'Missing code from GitHub' }), {
      headers: { 'Content-Type': 'text/html' },
      status: 400,
    });
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error || !tokenData.access_token) {
    return new Response(renderMessage('error', tokenData), {
      headers: { 'Content-Type': 'text/html' },
      status: 400,
    });
  }

  return new Response(renderMessage('success', { token: tokenData.access_token }), {
    headers: { 'Content-Type': 'text/html' },
  });
};
