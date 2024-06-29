import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const sans = Quicksand({ subsets: ["latin"] });

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
        <body className={sans.className}>
          {children}
          <Toaster position="bottom-center" richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
