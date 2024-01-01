import { Product } from "./product/types";
import ProductsWrapper from "@/app/product/domains/ProductsWrapper";
import { api } from "./__shared/utils/trpc/server";

const Home = async () => {
  const products = await api.product.productsList.query()

  return <ProductsWrapper products={products as Product[]} />
}

export default Home;