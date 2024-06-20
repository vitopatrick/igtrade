import { Facebook, TwitterIcon } from "lucide-react";
import Link from "next/link";

const termsLink = [
  {
    href: "/disclaimer",
    title: "Disclaimer",
  },
  {
    href: "/clearing-closure",
    title: "Clearing Closure",
  },
  {
    href: "/Copyright",
    title: "Copyright",
  },
];

const socialMedia = [
  {
    href: "/",
    icon: "https://www.rjobrien.com/wp-content/themes/gate39media/img/twitter-logo.png",
  },
  {
    href: "/",
    icon: "https://www.rjobrien.com/wp-content/themes/gate39media/img/facebook-logo.png",
  },
  {
    href: "/",
    icon: "https://www.rjobrien.com/wp-content/themes/gate39media/img/linked-in-logo.png",
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-700 p-8 text-white">
      <div className="flex items-center justify-center flex-col gap-4">
        <img
          src="https://www.rjobrien.com/wp-content/themes/gate39media/img/RJO_Logo_footer.png"
          alt="logo"
        />
        <div className="flex items-center justify-center gap-6 ">
          {socialMedia.map((link) => (
            <Link href={link.href} key={link.href} className="inline-block">
              <img src={link.icon} alt="coal" />
            </Link>
          ))}
        </div>
        <p className="text-neutral-200 text-xs">
          222 South Riverside Plaza, Suite 1200, Chicago, IL, 60606
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 my-8">
        {termsLink.map((link) => (
          <Link href={link.href} key={link.href} className="text-sm">
            {link.title}
          </Link>
        ))}
      </div>
      <p className="text-center text-xs">
        Futures trading involves the substantial risk of loss and is not
        suitable for all investors. Past performance is not indicative of future
        results.
      </p>
    </footer>
  );
};

export default Footer;
