import Link from "next/link";

import {
  Home,
  Wallet,
  DollarSign,
  Cog,
  Briefcase,
  UploadCloud,
} from "lucide-react";
import { StackIcon } from "@radix-ui/react-icons";

const sideMenuLinks = [
  {
    id: 1,
    href: "/dashboard",
    icon: <Home className="h-4 w-4" />,
    title: "Dashboard",
  },
  {
    id: 2,
    href: "/dashboard/wallet",
    icon: <Wallet className="h-4 w-4" />,
    title: "Assets",
  },
  {
    id: 3,
    href: "/dashboard/transactions",
    icon: <DollarSign className="h-4 w-4" />,
    title: "Transactions",
  },
  {
    id: 4,
    href: "/dashboard/deposit",
    icon: <Briefcase className="h-4 w-4" />,
    title: "Fund Account",
  },
  {
    id: 5,
    href: "/dashboard/withdrawal",
    icon: <UploadCloud className="h-4 w-4" />,
    title: "Withdrawals",
  },
  {
    id: 6,
    href: "/dashboard/settings",
    icon: <Cog className="h-4 w-4" />,
    title: "Settings",
  },
];

const MenuList = () => {
  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-4">
        {sideMenuLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-sm"
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MenuList;
