import Link from "next/link";

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <li className="group relative">
      <Link
        href={href}
        className="text-gray-700 dark:text-orange-600 text-xl md:text-xl lg:text-2xl font-accent font-medium transition-colors duration-300 block"
      >
        {text}
      </Link>
      <span className="block h-0.5 w-0 group-hover:w-full bg-gray-800 dark:bg-orange-600 transition-all duration-300 ease-in-out"></span>
    </li>
  );
};

export default NavLink;
