import ItemVersion from "./components/ItemVersion";

const Versions = () => {
  return (
    <section style={{ direction: "rtl" }}>
      {[...Array(3)].map((_, index) => (
        <ItemVersion
          title="الخطوات التالية في الجودة - دليلك إلى المنظمة الموثوقة"
          description="إن المستفيدين من منظمات القطاع الثالث والمجتمع ككل يودون الحصول على خدمات ذات معاير وجودة عالية، وهو الأمر نفسه التي تطمح إليه منظمات القطاع الثالث في إثبات سعيها للمعاير العليا، وهي لا تزال بحاجة إلى المزيد من الإرشاد في كيفية تحسين عملها."
          key={index}
        />
      ))}
    </section>
  );
};

export default Versions;
