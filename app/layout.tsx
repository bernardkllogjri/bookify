import "./globals.css";

import { Inter } from "next/font/google";
import MainWrapper from "./__shared/domains/MainWrapper";
import type { Metadata } from "next";
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
          <MainWrapper user={user}>
            {children}
            </MainWrapper>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
