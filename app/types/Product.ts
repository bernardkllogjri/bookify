export type ProductInCart = Product & { quantity: number };

export type Metadata = {
  colors: [
    { name: "White"; class: "bg-white"; selectedClass: "ring-gray-400" },
    { name: "Gray"; class: "bg-gray-200"; selectedClass: "ring-gray-400" },
    { name: "Black"; class: "bg-gray-900"; selectedClass: "ring-gray-900" }
  ];
  sizes: [
    { name: "XXS"; inStock: true },
    { name: "XS"; inStock: true },
    { name: "S"; inStock: true },
    { name: "M"; inStock: true },
    { name: "L"; inStock: true },
    { name: "XL"; inStock: true },
    { name: "XXL"; inStock: true },
    { name: "XXXL"; inStock: false }
  ];
};

export interface Product {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  images: {
    src: string;
    alt: string;
  }[];
  imageAlt: string;
  rating: number;
  reviews: { href: string; average: number; totalCount: number };
  metadata?: Metadata;
  description: string;
  highlights: string[];
  details: string;
  breadcrumbs: {
    id: number;
    name: string;
    href: string;
  }[];
}
