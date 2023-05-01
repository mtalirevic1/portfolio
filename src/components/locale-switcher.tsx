"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BA from "../../public/BA.svg";
import GB from "../../public/GB.svg";

const LocaleSwitcher = () => {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <Link href={redirectedPathName("bs")} className="h-8 w-10">
        <Image
          src={BA}
          alt="Bosanski"
          width={60}
          height={40}
          className="rounded"
        />
      </Link>
      <Link href={redirectedPathName("en")} className="h-8 w-10">
        <Image
          src={GB}
          alt="English"
          width={60}
          height={40}
          className="rounded"
        />
      </Link>
    </div>
  );
};

export default LocaleSwitcher;
