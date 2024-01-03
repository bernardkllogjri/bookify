"use client";

import Breadcrumbs from "@/app/__shared/components/breadcrumbs/Breadcrumbs";
import ProductGallery from "../components/ProductGallery";
import ProductHighlights from "../components/ProductHighlights";
import ProductInformation from "../components/ProductInformation";
import ProductOptions from "../components/ProductOptions";
import { useEffect } from "react";
import { useProductsStore } from "../store";

const ProductItemWrapper = ({ productId }: { productId: string }) => {
  const {
    selectProduct,
    addToCart,
    selectedProduct: product,
  } = useProductsStore(["addToCart", "selectProduct", "selectedProduct"]);
  useEffect(() => selectProduct(productId), [selectProduct, productId]);

  if (!product) return null;

  return (
    <div className="bg-white">
      <Breadcrumbs
        breadcrumbs={[
          ...product.breadcrumbs,
          {
            name: product.name,
            id: "product--name",
            href: `/product/${product.id}`,
          },
        ]}
      />
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <ProductGallery images={product.images} imageSrc={product.imageSrc} />
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <ProductInformation
            rating={product.rating}
            price={product.price}
            name={product.name}
            totalReviews={product.totalReviews}
          />
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>
          <ProductOptions options={product.options} addToCart={addToCart} />
          <div className="lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
            <ProductHighlights highlights={product.highlights} />
            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemWrapper;
