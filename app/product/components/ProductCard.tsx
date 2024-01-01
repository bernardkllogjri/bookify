import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";
import ProductQuickViewButton from "./ProductQuickViewButton";

const ProductCard: FC<{ product: Product; onQuickViewOpen: () => void }> = ({
  product,
  onQuickViewOpen,
}) => {
  return (
    <Link key={product.id} href={`/product/${product.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          width={300}
          height={340}
          loading="lazy"
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <ProductQuickViewButton onClick={onQuickViewOpen} />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </Link>
  );
};

export default ProductCard;
