import { Product, ProductInCart } from "./types";
import { createSelectors, createStore } from "@/app/__shared/store/config";

import formatCurrency from "@/app/__shared/utils/formatCurrency";
import parseCurrency from "@/app/__shared/utils/parseCurrency";

const transformProducts = (products: Product[]) =>
  products.map((product) => {
    const totalCount = product?.reviews.length;
    return {
      ...product,
      totalReviews: {
        count: totalCount,
        average:
          product?.reviews.reduce((acc, review) => acc + review.rating, 0) /
          totalCount,
      },
    };
  });

type State = {
  products: Product[];
  productsInCart: ProductInCart[];
  selectedProduct: Product | null;
};

type Actions = {
  selectProduct: (id: string) => void;
  removeSelectedProduct: () => void;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  getProductsInCartTotalPrice: () => string;
  setProducts: (products: Product[]) => void;
};

export const useProductsStore = createSelectors(
  createStore<State & Actions>("products-storage", (set, get) => ({
    products: [],
    productsInCart: [],
    selectedProduct: null,
    setProducts: (products) => {
      set({ products: transformProducts(products) });
    },
    getProductsInCartTotalPrice: () =>
      formatCurrency(
        get().productsInCart.reduce(
          (sum, product) =>
            sum + product.quantity * parseCurrency(product.price),
          0
        )
      ),
    selectProduct: (productId) =>
      set(({ products }) => ({
        selectedProduct: products.find(({ id }) => id === productId),
      })),
    removeSelectedProduct: () => set(() => ({ selectedProduct: null })),
    addToCart: (productId) => {
      set((state) => {
        let product = state.products.find(
          ({ id }) => id === productId
        ) as ProductInCart;
        const productInCartIdx = state.productsInCart.findIndex(
          ({ id }) => id === productId
        );
        const productInCart = state.productsInCart[productInCartIdx];
        if (productInCartIdx !== -1) {
          productInCart.quantity = productInCart.quantity + 1;
          state.productsInCart[productInCartIdx] = productInCart;
        } else {
          product = { ...product, quantity: 1 };
          state.productsInCart = [...state.productsInCart, product];
        }
      });
    },
    removeFromCart: (productId) => {
      set((state) => {
        const { productsInCart } = state;
        const productIdx = productsInCart.findIndex(
          ({ id }) => id === productId
        );
        const product = productsInCart[productIdx];
        if (product.quantity > 1) {
          state.productsInCart[productIdx].quantity = product.quantity - 1;
        } else if (productIdx !== -1) {
          state.productsInCart = productsInCart.toSpliced(productIdx, 1);
        }
      });
    },
  }))
);
