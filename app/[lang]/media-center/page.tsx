import MediaCenter from "@/components/MediaCenter/MediaCenter";
import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";

const page = () => {
  return (
    <section className="has-app-max-width mt-10">
      <HeaderPage image="/images/news.png" title="الأخبار" />
      <MediaCenter />
    </section>
  );
};

export default page;
