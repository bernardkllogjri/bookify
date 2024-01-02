import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductInCart } from "@/app/product/types";

type CartProps = {
  removeProductFromCart: (id: ProductInCart["id"]) => void;
  productsList: ProductInCart[]
}

const Cart: FC<CartProps> = ({
  removeProductFromCart,
  productsList
}) => {
 
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {productsList.map((product) => (
        <li key={product.id} className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <Image
              height={96}
              width={96}
              src={product.imageSrc}
              alt={product.imageAlt}
              className=" object-cover object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="ml-4">{product.price}</p>
              </div>
              {/* <p className="mt-1 text-sm text-gray-500">
                  {product?.metadata?.color}
                </p> */}
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <p className="text-gray-500">Qty {product.quantity}</p>

              <div className="flex">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => removeProductFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
