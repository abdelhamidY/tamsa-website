import TrustedCharity from "@/components/TrustedCharity/TrustedCharity";
import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";
import { Locale } from "@/i18n.config";

const page = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  return (
    <section className="has-app-max-width">
      <HeaderPage image="/images/trustedCharity.png" title="المنظمة الموثوقة" />
      <TrustedCharity lang={lang} />
    </section>
  );
};
export default page;
