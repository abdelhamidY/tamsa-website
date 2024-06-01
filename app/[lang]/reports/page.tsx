import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";
import Versions from "@/components/versions/Versions";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { reports } = await getDictionary(lang);
  return (
    <section className="has-app-max-width">
      <HeaderPage image="/images/reports.jpeg" title={reports.title} />
      <Versions />
    </section>
  );
};

export default Page;
