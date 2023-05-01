import Link from "next/link";
import NavLink from "@/components/header/nav-link";
import { HeaderStrings } from "@/app/types/dictionary";
import ThemeToggle from "@/components/theme-toggle";
import LocaleSwitcher from "@/components/locale-switcher";

const Header = ({ headerStrings }: { headerStrings: HeaderStrings }) => {
  return (
    <header className="py-10">
      <div className="container mx-auto flex items-center">
        <nav className="flex w-1/3 justify-start">
          <ul className="flex space-x-12">
            <NavLink text={headerStrings.journey} href="/" />
            <NavLink text={headerStrings.projects} href="/" />
            <NavLink text={headerStrings.contact} href="/" />
          </ul>
        </nav>
        <Link
          href="/"
          className="flex w-1/3 justify-center text-white text-xl font-bold"
        >
          Logo
        </Link>
        <div className="flex w-1/3 justify-end space-x-12">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
