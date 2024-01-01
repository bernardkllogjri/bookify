import { FC } from "react";

const ProductQuickViewButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="flex items-end p-4">
      <button
        type="button"
        className="relative z-10 w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-sm text-gray-900 opacity-0 group-hover:opacity-100"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }}
      >
        Quick View
        <span className="sr-only">, Basic Tee 6-Pack </span>
      </button>
    </div>
  );
};

export default ProductQuickViewButton;
