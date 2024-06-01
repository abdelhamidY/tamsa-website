import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";
import Versions from "@/components/versions/Versions";

const Page = () => {
  return (
    <section className="has-app-max-width">
      <HeaderPage image="/images/reports.jpeg" title="الأصدارات" />
      <Versions />
    </section>
  );
};

export default Page;
