import ProductItemWrapper from "../domains/ProductItemWrapper";

const Product = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <ProductItemWrapper
      productId={id}
    />
  )
};

export default Product;
