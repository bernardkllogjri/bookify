import "./globals.css";

import CartDrawer from "@/app/__shared/components/cart-drawer/CartDrawer";
import Footer from "@/app/__shared/components/footer/Footer";
import Header from "@/app/__shared/components/header/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ProductQuickViewModal from "./product/components/ProductQuickViewModal";
import { TRPCReactProvider } from "@/app/__shared/utils/trpc/react";
import { auth } from "@/app/__shared/server/auth";
import classnames from "@/app/__shared/utils/classnames";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookify",
  description: "Book online shop",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const { user } = session || {};

  return (
    <html lang="en">
      <body className={classnames(inter.className)}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Header user={user} />
          <main className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <ProductQuickViewModal />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
