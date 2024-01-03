import {
  Product as PrismaProduct,
  ProductBreadcrumb,
  ProductHighlights,
  ProductImage,
  Review,
} from "@prisma/client";

export type ProductOptions = {
  colors: { name: string; class: string; selectedClass: string }[];
  sizes: {
    name: "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
    inStock: boolean;
  }[];
};

export interface Product extends PrismaProduct {
  images: ProductImage[];
  highlights: ProductHighlights[];
  breadcrumbs: ProductBreadcrumb[];
  reviews: Review[];
  options: ProductOptions;
  totalReviews?: {
    count: number;
    average: number;
  };
}
export type ProductInCart = Product & { quantity: number };
