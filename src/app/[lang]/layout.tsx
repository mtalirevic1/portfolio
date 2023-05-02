import "../globals.css";
import { i18n, Locale } from "@/i18n-config";
import { Lato, Roboto } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/components/providers";
import Header from "@/components/header";
import { getDictionary } from "@/get-dictionary";

export const metadata = {
  title: "MT | Home",
  description: "Matej Talirevic Portfolio Homepage",
};

const mainFont = Roboto({
  variable: "--font-roboto",
  display: "swap",
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

const accentFont = Lato({
  variable: "--font-lato",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html
      lang={params.lang}
      className={`${mainFont.variable} ${accentFont.variable}`}
    >
      <body className="dark:bg-gradient-to-b from-black from-20% via-orange-950 via-85% to-amber-950">
        <Providers>
          <Header headerStrings={dictionary.header} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
