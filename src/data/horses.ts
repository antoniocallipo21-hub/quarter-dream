export type HorseCategorySlug =
  | 'broodmares'
  | 'show-horses'
  | 'three-years-old'
  | 'two-years-old'
  | 'weanlings';

export interface HorseCategory {
  slug: HorseCategorySlug;
  label: string;
}

export const horseCategories: HorseCategory[] = [
  { slug: 'broodmares', label: 'Broodmares' },
  { slug: 'show-horses', label: 'Show Horses' },
  { slug: 'three-years-old', label: 'Three Years Old' },
  { slug: 'two-years-old', label: 'Two Years Old' },
  { slug: 'weanlings', label: 'Weanlings' },
];
