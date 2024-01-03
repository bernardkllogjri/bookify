import { Product } from "../product/types";

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

export type Navigation = {
  categories: Category[];
  pages: Page[];
}

export type Breadcrumb = { 
  id: string;
  name: string;
  href: string;
}