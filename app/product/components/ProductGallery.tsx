import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { Product } from "../types";

type ProductGalleryProps = {
  images: Product["images"];
  imageSrc: Product["imageSrc"];
};

const ProductGallery: FC<ProductGalleryProps> = ({ images, imageSrc }) => {
  const [active, setActive] = useState(imageSrc);
  useEffect(() => setActive(imageSrc), [imageSrc]);

  return (
    <div className="col-span-2">
      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg object-cover object-center mx-auto"
            height={540}
            width={540}
            src={active || ""}
            alt="Selected image"
          />
        </div>
        <div className="flex space-between gap-4 overflow-x-auto">
          {images.map(({ src }, index) => (
            <Image
              key={index}
              width={160}
              height={160}
              onClick={() => setActive(src)}
              src={src}
              className="h-40 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
