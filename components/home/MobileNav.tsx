import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/timeline",
    title: "Historical Timeline",
  },
  {
    href: "/contact",
    title: "Contact Us",
  },
];

const bottomLinks = [
  {
    href: "/sign-up",
    title: "Quotes & Chart",
  },
  {
    href: "/sign-in",
    title: "Trading Platform",
  },
  {
    href: "/market-insight",
    title: "Market Insight",
  },
  {
    href: "/sign-up",
    title: "Technologies",
  },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-6 my-6">
          {bottomLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="space-y-6">
          <Link
            href="/sign-in"
            className="bg-green-600 py-3 px-4 rounded-full text-xs block text-center text-white"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-green-600 py-3 px-4 rounded-full text-xs block text-center text-white"
          >
            Open Account
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
