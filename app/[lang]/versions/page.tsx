import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";
import Versions from "@/components/versions/Versions";

const page = () => {
  return (
    <section className="has-app-max-width">
      <HeaderPage image="/images/versions.png" title="اصدارات تام" />

      <Versions />
    </section>
  );
};

export default page;
