import { FC } from "react";
import { Product } from "../types";

type ProductHighlightsProps = {
  highlights: Product["highlights"];
};

const ProductHighlights: FC<ProductHighlightsProps> = ({ highlights }) => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
          {highlights.map(({ name, id }) => (
            <li key={id} className="text-gray-400">
              <span className="text-gray-600">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductHighlights;
