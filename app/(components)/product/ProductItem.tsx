import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/types/Product';
import ProductQuickView from "./ProductQuickView";

const ProductItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <Link key={product.id} href={`/product/${product.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          loading="lazy"
          fill={true}
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <ProductQuickView product={product} />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </Link>
  );
};

export default ProductItem;
