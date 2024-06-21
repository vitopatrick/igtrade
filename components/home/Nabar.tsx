import Link from "next/link";
import { MobileNav } from "./MobileNav";

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

const NavigationBar = () => {
  return (
    <nav>
      {/* top bar */}
      <div className="bg-black text-white p-4 lg:flex justify-between hidden">
        {/* links */}
        <div className="space-x-6">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="text-xs">
              {link.title}
            </Link>
          ))}
        </div>
        {/* login and register */}
        <div className="space-x-3">
          <Link
            href="/sign-in"
            className="bg-green-600 py-3 px-4 rounded-full text-xs"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-green-600 py-3 px-4 rounded-full text-xs"
          >
            Open Account
          </Link>
        </div>
      </div>
      {/* bottom nav */}
      <section className="flex justify-between items-center p-4 shadow-md">
        <Link href="/">
          <img
            src=" https://www.rjobrien.com/wp-content/themes/gate39media/img/logo.png"
            alt="logo"
          />
        </Link>
        <div className="space-x-6 hidden lg:block">
          {bottomLinks.map((link) => (
            <Link href={link.href} key={link.href} className="text-base">
              {link.title}
            </Link>
          ))}
        </div>
        <MobileNav />
      </section>
    </nav>
  );
};

export default NavigationBar;
