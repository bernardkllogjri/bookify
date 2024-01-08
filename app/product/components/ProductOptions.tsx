import { FC, useState } from "react";

import { Product } from "../types";
import { RadioGroup } from "@headlessui/react";
import classnames from "@/app/__shared/utils/classnames";

type ProductOptionsProps = {
  options: Product["options"];
  addToCart: () => void;
};

const ProductOptions: FC<ProductOptionsProps> = ({ options, addToCart }) => {
  const [selectedColor, setSelectedColor] = useState(options?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(options?.sizes[2]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart();
      }}
    >
      <div>
        <h4 className="text-sm font-medium text-gray-900">Color</h4>

        <RadioGroup
          value={selectedColor}
          onChange={setSelectedColor}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only">
            Choose a color
          </RadioGroup.Label>
          <span className="flex items-center space-x-3">
            {options?.colors?.map((color) => (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked }) =>
                  classnames(
                    color.selectedClass,
                    active && checked ? "ring ring-offset-1" : "",
                    !active && checked ? "ring-2" : "",
                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                  )
                }
              >
                <RadioGroup.Label as="span" className="sr-only">
                  {color.name}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={classnames(
                    color.class,
                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                  )}
                />
              </RadioGroup.Option>
            ))}
          </span>
        </RadioGroup>
      </div>

      {/* Sizes */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-900">Size</h4>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Size guide
          </a>
        </div>

        <RadioGroup
          value={selectedSize}
          onChange={setSelectedSize}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
          <div className="grid grid-cols-4 gap-4">
            {options?.sizes?.map((size) => (
              <RadioGroup.Option
                key={size.name}
                value={size}
                disabled={!size.inStock}
                className={({ active }) =>
                  classnames(
                    size.inStock
                      ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                      : "cursor-not-allowed bg-gray-50 text-gray-200",
                    active ? "ring-2 ring-blue-500" : "",
                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                    {size.inStock ? (
                      <span
                        className={classnames(
                          active ? "border" : "border-2",
                          checked ? "border-blue-500" : "border-transparent",
                          "pointer-events-none absolute -inset-px rounded-md"
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1={0}
                            y1={100}
                            x2={100}
                            y2={0}
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add to bag
      </button>
    </form>
  );
};
export default ProductOptions;
