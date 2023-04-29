import Link from "next/link";
import NavLink from "@/components/header/NavLink";

const Header = () => {
  return (
    <header className="py-10">
      <div className="container mx-auto flex items-center">
        <nav className="flex w-1/3 justify-start">
          <ul className="flex space-x-12">
            <NavLink text="Home" href="/" />
            <NavLink text="Projects" href="/" />
            <NavLink text="My Journey" href="/" />
          </ul>
        </nav>
        <Link
          href="/"
          className="flex w-1/3 justify-center text-white text-xl font-bold"
        >
          Logo
        </Link>
      </div>
    </header>
  );
};

export default Header;
