export interface Stallion {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  logo: string;
  portrait: string;
  born: string;
  color: string;
  registry: string;
  lte: string;
  height: string;
  owner: string;
  residence: string;
  sixPanel: string;
  achievements: string[];
  pedigree: {
    sire: string;
    dam: string;
    sireSire: string;
    sireDam: string;
    damSire: string;
    damDam: string;
  };
  description: string;
  studFee: string;
  semen: string;
  status: string;
  maleLine?: {
    heading: string;
    text: string;
  };
  femaleLine?: {
    heading: string;
    text: string;
  };
  gallery?: string[];
  distributors?: {
    label: string;
    href: string;
    primary?: boolean;
  }[];
  videoId?: string;
}

export const stallions: Stallion[] = [
  {
    slug: 'colonels-dancing-gun',
    name: 'Colonels Dancing Gun',
    subtitle: 'NRHA Open World Champion',
    image: '/stallions/colonels-dancing-gun/hero.jpg',
    logo: '/stallions/colonels-dancing-gun/logo.png',
    portrait: '/stallions/colonels-dancing-gun/portrait.jpg',
    born: '2014',
    color: 'Sorrel',
    registry: 'AQHA / APHA',
    lte: '$249,726.23',
    height: '1.48 m',
    owner: 'Quarter Dream SRL',
    residence: 'Quarter Dream SRL, Ostuni (Italy)',
    sixPanel: '6 Panel Negative',
    achievements: [
      '2018 &middot; NRHA European Futurity L4 Open Champion (226,5)',
      '2018 &middot; NRHA Germany Breeders Futurity 3Y L4 Open Champion (231)',
      '2019 &middot; NRBC Open Classic Challenge Co-Reserve Champion (224,5)',
      '2020 &middot; NRHA Okc Derby L4 Open Finalist (220)',
      '2020 &middot; NRBC L4 Open Finalist',
      '2020 &middot; NRHA European Derby L4 Open Champion (221,5)',
      '2021 &middot; Americana NRHA Bronze Trophy Open Champion (225,5)',
      '2021 &middot; NRHA/IRHA Maturity L4 Open Reserve Champion (223,5)',
      '2022 &middot; NRHA/IRHA Maturity L4 Open Champion (230)',
      '2023 &middot; World Reining Championships Senior Open Gold Medal (228,5)',
      '2023 &middot; Americana NRHA Bronze Trophy Open Re-Champion (224)',
      '2023 &middot; NRHA European Derby/The Run For A Million Qualifier Open 6th Place',
      '2023 &middot; NRHA/AVCR Sliding Before Christmas Open Champion',
      '2024 &middot; NRHA/AVCR Lets Slide Again Open Champion',
      '2024 &middot; NRHA/AVCR Spring Fever Open Champion',
      '2024 &middot; NRHA/AVCR May Remake Open Champion',
      '2024 &middot; NRHA Golden Circle Open Champion',
      '2024 &middot; European Affiliates Anc. Open Champion (223)',
      '2024 &middot; NRHA/AVCR Summer Is Magic Open Champion',
      '2024 &middot; NRHA/ARHA Austrian Futurity Anc. Open Champion (222)',
      '2024 &middot; NRHA/AVCR Never Ending Sliding Open Champion',
      '2024 &middot; NRHA 2 DeNiroBootCo Trophy Open Champion',
      '2024 &middot; NRHA Belgium Futurity Anc. Open Champion (224,5)',
      '2024 &middot; NRHA/IRHA Maturity L4 Open Champion (226)',
      '2024 &middot; NRHA Open World Champion',
    ],
    pedigree: {
      sire: 'Colonels Smoking Gun',
      dam: 'Dance Little Spook',
      sireSire: 'Colonelfourfreckle',
      sireDam: 'Katie Gun',
      damSire: 'Smart Spook',
      damDam: 'Sailors Dance',
    },
    description:
      'European-bred stallion by Quarter Dream SRL, son of Colonels Smoking Gun and Dance Little Spook. Dominated the European reining circuit before capping his show career as 2024 NRHA Open World Champion, with lifetime earnings approaching $250,000. Now standing at Quarter Dream, Ostuni.',
    studFee: '$1,800',
    semen: 'Frozen &middot; USA / Europe',
    status: 'Active for the current breeding season',
    maleLine: {
      heading: 'Colonels Smoking Gun (AQHA / APHA), $177,386:',
      text:
        'NRHA Hall of Fame; NRHA Open Futurity Reserve Champion; APHA World Champion; USET Finals Champion. The AQHA #1 All-Time Leading Reining Sire. Sire of 967 money-earners, $16,931,136, and earners of 9,637 AQHA points.',
    },
    femaleLine: {
      heading: 'Dance Little Spook',
      text:
        '(NRHA Earnings over $80,000.00; 2011 ARHA Western Star Circuit S/H 5&amp;U Open Re-Champion; 2011 NRHA Italian Futurity Open Champion; 2012 NRHA European Futurity Open Finalist; 2012 NRHA Czech Show Futurity 4Y Open Champion; 2012 NRHA Happy Hour II Czech Show S/H 5&amp;U Open Champion; 2013 NRHA Italian Derby Open Finalist; 2013 NRHA Italian Maturity Open Finalist; 2013 NRHA Austrian Futurity Ancill. Open Champion; 2013 NRHA Austrian Western Star S/H 5&amp;U Open Champion; 2013 NRHA European Derby Lev. 4 Open Finalist; 2013 NRHA Reining International de Lyon Trophy Open 8th; 2014 NRHA Italian Derby Lev. 4 Open Finalist; 2014 NRHA 23 Classic Trophy Open 7th Place; 2014 NRHA Roleski 4 Spins II Open Trophy Champion; 2014 NRHA European Affiliate Championship Open 3rd; 2014 NRHA Reining International de Lyon Trophy Open 8th; 2015 FEI European Reining Championships Individual &amp; Team Competition Double Gold Medal; 2015 NRHA European Derby Lev. 4 Open Finalist.)',
    },
    gallery: [
      '/stallions/colonels-dancing-gun/gallery/gallery1.jpg',
      '/stallions/colonels-dancing-gun/gallery/gallery2.jpg',
      '/stallions/colonels-dancing-gun/gallery/gallery3.jpg',
      '/stallions/colonels-dancing-gun/gallery/gallery4.jpg',
      '/stallions/colonels-dancing-gun/gallery/gallery5.jpg',
      '/stallions/colonels-dancing-gun/gallery/gallery6.jpg',
    ],
    distributors: [
      { label: 'Frozen Partners (EU)', href: 'https://www.frozen-partners.com/en/colonels-dancing-gun/' },
      { label: 'Orlandini Equine (EU)', href: 'https://www.orlandiniequine.com/it/colonel-dancing-gun/' },
      { label: 'In Foal Partners (EU)', href: 'https://www.infoalpartners.com/portfolio-items/colonels-dancing-gun/' },
    ],
    videoId: 'Q_RgJUT0sWE',
  },
  {
    slug: 'hollys-hijacker',
    name: 'Hollys Hijacker',
    subtitle: '2019 Futurity L4 Open & Stallion Stakes Champion',
    image: '/stallions/hollys-hijacker/hero.jpg',
    logo: '/stallions/hollys-hijacker/logo.png',
    portrait: '/stallions/hollys-hijacker/portrait.jpg',
    born: '&mdash;',
    color: 'Sorrel',
    registry: 'AQHA',
    lte: '$93,803',
    height: '&mdash;',
    owner: 'Quarter Dream SRL',
    residence: 'Quarter Dream SRL, Ostuni (Italy)',
    sixPanel: '6 Panel Negative',
    achievements: [
      '2019 &middot; Futurity L4 Open Champion',
      '2019 &middot; Stallion Stakes Champion',
    ],
    pedigree: {
      sire: '&mdash;',
      dam: '&mdash;',
      sireSire: '&mdash;',
      sireDam: '&mdash;',
      damSire: '&mdash;',
      damDam: '&mdash;',
    },
    description:
      'Full pedigree and career details coming soon. Get in touch for the complete breeding record on Hollys Hijacker.',
    studFee: 'On request',
    semen: 'Contact us',
    status: 'Active for the current breeding season',
  },
  {
    slug: 'sugar-little-step',
    name: 'Sugar Little Step',
    subtitle: 'Sire of Futurity & Maturity Champions',
    image: '/stallions/sugar-little-step/hero.jpg',
    logo: '/stallions/sugar-little-step/logo.png',
    portrait: '/stallions/sugar-little-step/portrait.jpg',
    born: '&mdash;',
    color: 'Palomino',
    registry: 'AQHA',
    lte: '$135,621',
    height: '&mdash;',
    owner: 'Quarter Dream SRL',
    residence: 'Quarter Dream SRL, Ostuni (Italy)',
    sixPanel: '6 Panel Negative',
    achievements: [
      'Sire of multiple Futurity &amp; Maturity Champions',
    ],
    pedigree: {
      sire: '&mdash;',
      dam: '&mdash;',
      sireSire: '&mdash;',
      sireDam: '&mdash;',
      damSire: '&mdash;',
      damDam: '&mdash;',
    },
    description:
      'Full pedigree and career details coming soon. Get in touch for the complete breeding record on Sugar Little Step.',
    studFee: 'On request',
    semen: 'Contact us',
    status: 'Active for the current breeding season',
  },
];
