import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trading Platform",
  description: "Welcome to Our Trading Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={sans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
