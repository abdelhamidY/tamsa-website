import Image from "next/image";
import { CompanyInfoProps } from "./types";

const CompanyInfo = ({ description, image, title }: CompanyInfoProps) => {
  return (
    <div className="bg-[#fff] px-5 py-5 ">
      <div className="w-full h-full bg-[#006067] px-5 py-5 grid gap-5 md:gap-0 md:grid-cols-2 rounded-lg ">
        <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[29px] text-[#fff]">عن الشركة</h1>
            <div className="w-[80px] h-1 bg-[#D57153] mt-2 mb-5"></div>
          </div>
          <p className="text-white max-w-[600px] text-lg md:text-[23px] text-right">
            تام هي شركة متخصصة في تقديم حلول إدارية مبتكرة وبرامج تدريبية مخصصة
            لرفع مستوى الجودة في قطاع الأعمال غير الربح. نتفرد بتقديم خدمات تميز
            بفضل فريقنا ذو الخبرة والمستشارين المعتمدين المنتشرين حول المملكة.
            تشهد شراكاتنا المتنوعة في قطاع الأعمال غير الربح على التزامنا بتحفيز
            التطور وتحقيق التأثير الإيجابي. بناءً على الشفافية والجودة، نعكس
            التميز في كل تفاصيل عملنا.
          </p>
        </div>
        <div>
          <Image
            src="/images/tamsaCompany.png"
            alt="company"
            width={620}
            height={334}
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};
export default CompanyInfo;
