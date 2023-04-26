import "../globals.css";
import { i18n } from "@/i18n-config";
import { Lato, Roboto } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/components/providers";

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

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={params.lang}
      className={`${mainFont.variable} ${accentFont.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
