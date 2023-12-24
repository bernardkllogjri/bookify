import { Product } from "./Product";

export type FeaturedProducts = Pick<
  Product,
  "name" | "imageSrc" | "imageAlt"
> & { href: string };

export type Link = {
  name: string;
  href: string;
};

export type Section = {
  id: string;
  name: string;
  items: Link[];
};

export type Category = {
  id: string;
  name: string;
  featured: FeaturedProducts[];
  sections: Section[];
};

export type Page = {
  name: string;
  href: string;
};

export interface Navigation {
  categories: Category[];
  pages: Page[];
}
