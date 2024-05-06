import TrustedCharity from "@/components/TrustedCharity/TrustedCharity";
import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";

const page = () => {
  return (
    <section className="has-app-max-width">
      <HeaderPage image="/images/trustedCharity.png" title="المنظمة الموثوقة" />
      <TrustedCharity />
    </section>
  );
};
export default page;
