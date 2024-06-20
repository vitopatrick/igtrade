import DashboardHeader from "@/components/dashboard-header/Header";
import MenuList from "@/components/navbar/MenuList";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ThemeProvider } from "@/provider/ThemProvider";
import { Bell } from "lucide-react";
import type { Metadata } from "next";

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
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <span className="">TRADING PLATFORM</span>

                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-8 w-8"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>
              <MenuList />
            </div>
          </div>
          <div className="flex flex-col">
            <DashboardHeader />
            <Container>{children}</Container>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
