import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  {
    href: "/ow",
    title: "Dashboard",
  },
  {
    href: "/ow/clients",
    title: "Clients",
  },
  {
    href: "/ow",
    title: "Trade",
  },
];

const AdminHeader = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {links.map((link, index) => (
            <Link
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              key={index.toString()}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  className="text-dark transition-colors hover:text-dark"
                  key={index.toString()}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default AdminHeader;
