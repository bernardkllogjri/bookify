import {
  Product as PrismaProduct,
  ProductBreadcrumb,
  ProductHighlights,
  ProductImage,
  Review,
} from "@prisma/client";

export type Metadata = {
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
  metadata: Metadata;
  totalReviews?: {
    count: number;
    average: number;
  };
}
export type ProductInCart = Product & { quantity: number };
