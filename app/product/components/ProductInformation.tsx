import { FC } from "react";
import { Product } from "../types";
import { StarIcon } from "@heroicons/react/20/solid";
import classnames from "@/app/__shared/utils/classnames";

type ProductInformationProps = {
  rating: Product["rating"];
  price: Product["price"];
  name: Product["name"];
  totalReviews: Product["totalReviews"];
};

const ProductInformation: FC<ProductInformationProps> = ({
  rating,
  price,
  name,
  totalReviews,
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{name}</h2>
      <section aria-labelledby="information-heading" className="mt-2">
        <h3 id="information-heading" className="sr-only">
          Product information
        </h3>

        <p className="text-2xl text-gray-900">{price}</p>
        <div className="mt-6">
          <h4 className="sr-only">Reviews</h4>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((r) => (
                <StarIcon
                  key={r}
                  className={classnames(
                    rating > r ? "text-gray-900" : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{rating} out of 5 stars</p>
            <a
              href="#"
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {totalReviews?.count} reviews
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductInformation;
