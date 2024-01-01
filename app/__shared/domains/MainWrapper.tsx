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
  const {
    navigation,
    openPopOverMenu,
    closePopOverMenu,
    popOverMenuOpen,
    openCartDrawer,
    cartDrawerOpen,
    closeCartDrawer,
    closeQuickView,
    quickViewOpen,
  } = useAppStore.use;
  const {
    selectedProduct,
    addToCart,
    productsInCart,
    removeFromCart,
    getProductsInCartTotalPrice,
  } = useProductsStore.use;

  const productsInCartCount = productsInCart()?.length;
  const cartTotalPrice = getProductsInCartTotalPrice()();

  return (
    <>
      <Header
        user={user}
        navigation={navigation()}
        openPopOverMenu={openPopOverMenu()}
        closePopOverMenu={closePopOverMenu()}
        popOverMenuOpen={popOverMenuOpen()}
        openCartDrawer={openCartDrawer()}
        productsInCartCount={productsInCartCount}
      />
      <main className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">{children}</main>
      <Footer />
      <CartDrawer
        cartDrawerOpen={cartDrawerOpen()}
        products={productsInCart()}
        removeProductFromCart={removeFromCart()}
        closeCartDrawer={closeCartDrawer()}
        cartTotalPrice={cartTotalPrice}
      />
      <ProductQuickViewModal
        product={selectedProduct()}
        addToCart={addToCart()}
        closeQuickView={closeQuickView()}
        quickViewOpen={quickViewOpen()}
      />
    </>
  );
};

export default MainWrapper;
