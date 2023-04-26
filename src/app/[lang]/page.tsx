import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import LocaleSwitcher from "@/components/locale-switcher";
import ThemeToggle from "@/components/theme-toggle";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <ThemeToggle />
      <LocaleSwitcher />
      <h1 className="font-accent text-5xl font-medium dark:text-orange-600">
        {dictionary.header.journey}
      </h1>
      <p className="font-main text-2xl font-light dark:text-orange-600">
        Roboto Paragraph
      </p>
    </main>
  );
};

export default Home;
