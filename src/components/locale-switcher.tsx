"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const LocaleSwitcher = () => {
  const pathName = usePathname();
  const hasEnPath = pathName.includes("/en");
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <Link
        href={redirectedPathName(hasEnPath ? "bs" : "en")}
        className="dark:text-orange-600"
      >
        {hasEnPath ? "BS" : "EN"}
      </Link>
    </div>
  );
};

export default LocaleSwitcher;
