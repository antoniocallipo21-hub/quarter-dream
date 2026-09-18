import type { APIRoute } from 'astro';

// Step 1 of the Decap CMS OAuth flow: send the browser to GitHub's
// authorization screen. GitHub redirects back to /api/callback with a code.
export const prerender = false;

export const GET: APIRoute = ({ redirect, url }) => {
  const clientId = import.meta.env.OAUTH_GITHUB_CLIENT_ID;
  const redirectUri = `${url.origin}/api/callback`;

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', clientId);
  authorizeUrl.searchParams.set('redirect_uri', redirectUri);
  authorizeUrl.searchParams.set('scope', 'repo,user');

  return redirect(authorizeUrl.toString());
};
