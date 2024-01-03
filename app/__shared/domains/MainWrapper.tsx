"use client";

import CartDrawer from "../components/cart-drawer/CartDrawer";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductQuickViewModal from "@/app/product/components/ProductQuickViewModal";
import { User } from "next-auth";
import { useAppStore } from "../store";
import { useProductsStore } from "@/app/product/store";

const MainWrapper = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: User;
}) => {
  const appStore = useAppStore([
    "navigation",
    "openPopOverMenu",
    "closePopOverMenu",
    "popOverMenuOpen",
    "openCartDrawer",
    "cartDrawerOpen",
    "closeCartDrawer",
    "closeQuickView",
    "quickViewOpen",
  ]);
  const productsStore = useProductsStore([
    "selectedProduct",
    "addToCart",
    "productsInCart",
    "removeFromCart",
    "getProductsInCartTotalPrice",
  ]);

  const productsInCartCount = productsStore.productsInCart?.length;
  const cartTotalPrice = productsStore.getProductsInCartTotalPrice();

  return (
    <>
      <Header
        user={user}
        navigation={appStore.navigation}
        openPopOverMenu={appStore.openPopOverMenu}
        closePopOverMenu={appStore.closePopOverMenu}
        popOverMenuOpen={appStore.popOverMenuOpen}
        openCartDrawer={appStore.openCartDrawer}
        productsInCartCount={productsInCartCount}
      />
      <main className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">{children}</main>
      <Footer />
      <CartDrawer
        cartDrawerOpen={appStore.cartDrawerOpen}
        products={productsStore.productsInCart}
        removeProductFromCart={productsStore.removeFromCart}
        closeCartDrawer={appStore.closeCartDrawer}
        cartTotalPrice={cartTotalPrice}
      />
      <ProductQuickViewModal
        product={productsStore.selectedProduct}
        addToCart={productsStore.addToCart}
        closeQuickView={appStore.closeQuickView}
        quickViewOpen={appStore.quickViewOpen}
      />
    </>
  );
};

export default MainWrapper;
