import { CompanyInfoProps } from "./types";

const CompanyInfo = ({ description, image, title }: CompanyInfoProps) => {
  return (
    <div className="bg-[#006067]  grid grid-cols-2  pr-10 py-10  rounded-lg ">
      <div className="flex flex-col gap-4">
        <h1 className="text-[29px]   text-white ">عن الشركة</h1>
        <p className="text-white max-w-[600px] text-[23px]">
          تام هي شركة متخصصة في تقديم حلول إدارية مبتكرة وبرامج تدريبية مخصصة
          لرفع مستوى الجودة في قطاع الأعمال غير الربح. نتفرد بتقديم خدمات تميز
          بفضل فريقنا ذو الخبرة والمستشارين المعتمدين المنتشرين حول المملكة.
          تشهد شراكاتنا المتنوعة في قطاع الأعمال غير الربح على التزامنا بتحفيز
          التطور وتحقيق التأثير الإيجابي. بناءً على الشفافية والجودة، نعكس
          التميز في كل تفاصيل عملنا.
        </p>
      </div>
      <div>
        <img src="/images/tamsaCompany.png" width={"620px"} height={"334px"} />
      </div>
    </div>
  );
};
export default CompanyInfo;
