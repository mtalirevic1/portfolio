import Link from "next/link";

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <li className="group relative">
      <Link
        href={href}
        className="text-gray-700 dark:text-orange-500 text-lg md:text-xl lg:text-2xl font-accent font-medium transition-colors duration-300 block"
      >
        {text}
      </Link>
      <span className="block h-0.5 w-0 bg-gray-700 dark:bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </li>
  );
};

export default NavLink;
