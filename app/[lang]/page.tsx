import Clients from "@/components/home/Clients/Clients";
import CompanyInfo from "@/components/home/CompanyInfo/CompanyInfo";
import OurServices from "@/components/home/OurServices/OurServices";
import Statics from "@/components/home/Statics/Statics";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Home } = await getDictionary(lang);
  return (
    <main className="has-app-max-width">
      <HeaderPage title={Home.title} image="/images/headerImage.png" />
      <CompanyInfo description="" image="" title="" />
      <OurServices isLtr={lang === "en"}/>
      <Statics />
      <Clients />
      <Testimonials />
    </main>
  );
}
