import "./globals.css";

import { Inter } from "next/font/google";
import MainWrapper from "./__shared/domains/MainWrapper";
import type { Metadata } from "next";
import { auth } from "@/app/__shared/server/auth";
import clsx from "clsx";

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
      <body className={clsx(inter.className)}>
        <MainWrapper user={user}>{children}</MainWrapper>
      </body>
    </html>
  );
}
