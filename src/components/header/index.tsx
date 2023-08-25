import NavLink from "@/components/header/nav-link";
import { HeaderStrings } from "@/app/types/dictionary";
import ThemeToggle from "@/components/theme-toggle";
import LocaleSwitcher from "@/components/locale-switcher";

const Header = ({ headerStrings }: { headerStrings: HeaderStrings }) => {
  return (
    <header className="py-10">
      <div className="container mx-auto flex items-center">
        <nav className="flex w-2/3 justify-start">
          <ul className="flex space-x-14 space-y-3 flex-col  xl:flex-row items-end">
            <NavLink text={headerStrings.journey} href="/" />
            <NavLink text={headerStrings.projects} href="/" />
            <NavLink text={headerStrings.contact} href="/" />
          </ul>
        </nav>
        <div className="flex w-1/3 justify-end sm:space-x-0 xl:space-x-8 space-y-3 xl:space-y-0 flex-col xl:flex-row">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
