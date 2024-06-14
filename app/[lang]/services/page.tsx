import ServicesItem from "@/components/Services/ServicesItem";
import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";
import { Locale } from "@/i18n.config";
import Image from "next/image";

const page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const services = [
    {
      src: "/images/assets/b6f5f47798b99b8a2b281828203426c3.png",
      paragraph: "التأهيل على المواصفة القياسية",
      secondParagraph: "لإدارة التطوع في المنظمات (SASO2923)",
    },
    {
      src: "/images/assets/b6f5f47798b99b8a2b281828203426c3.png",
      paragraph: "تأسيس وحدات ومبادرات المسؤولية المجتمعية",
    },
    {
      src: "/images/assets/b6f5f47798b99b8a2b281828203426c3.png",
      paragraph: "التأهيل على تقارير الاستدامة",
    },
    {
      src: "/images/assets/b6f5f47798b99b8a2b281828203426c3.png",
      paragraph: "الابتكار والتصميم",
    },
    {
      src: "/images/assets/b6f5f47798b99b8a2b281828203426c3.png",
      paragraph: "التأهيل على جوائز التميز",
    },
  ];

  const duty = [
    { title: "مبادئ التطوع" },
    { title: "بيئة تطبيق إدارة التطوع في المنظمات" },
    { title: "سياسات إدارة التطوع في المنظمة وإجراءاتها" },
    { title: "التخطيط لإدارة التطوع" },
    { title: "إدارة المخاطر" },
    { title: " إدارة الموارد" },
    { title: "إشراك المتطوع" },
    { title: "تقييم ممارسات التطوع" },
    { title: ". التحسين لعملية إدارة التطور" },
  ];
  return (
    <section className="has-app-max-width mt-10">
      <HeaderPage image="/images/sericesimgs.jpg" title="خدماتنا" />

      <section
        className="grid grid-cols-1  lg:grid-cols-2 gap-4 mt-5 px-5 sm:px-10"
        style={{ direction: lang === "ar" ? "ltr" : "rtl" }}
      >
        <div className="bg-[#FAF9F4] order-1 lg:-order-1 p-4 rounded-lg">
          <Image
            src={"/images/c8c858e2ccb758204dff82667cf20517.jpg"}
            width={400}
            height={400}
            alt="image"
            className="rounded-lg w-full h-[200px] object-cover"
          />

          <p className="mt-4 text-end text-[14px] font-light">
            تقوم شركة تام بتأهيل المنظمات لتطبيق المواصفة القياسية السعودية
             SASO2923لإدارة التطوع في المنظمات وتوضح كيفية تطبيق بنود المواصفة
            على المنظمات التي تُشرك متطوعين أو ترغب بإشراك متطوعين بأنشطتها
            لتساهم في تحسين استقطابهم وخلق تجربة فريدة، بما يسهم في رفع عدد
            المتطوعين إلى مليون متطوع تماشياً مع رؤية المملكة 2030م.
          </p>
          <p className="mt-4 text-end text-[18px] font-bold">
            سوف تقوم شركة تام بتعزيز تطبيق متطلبات المواصفة القياسية السعودية
            SASO2923 على النحو التالي
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-3 gap-2 mt-4">
            {duty.map((_, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-[#CFFCFF] rounded-lg p-6 w-full h-full text-center font-bold"
              >
                {_.title}
              </div>
            ))}
          </div>
          <button className="bg-[#D57153] text-white p-4 rounded-lg mt-4 w-full hover:bg-red-600">
            اطلب خدمة
          </button>
        </div>
        <div className="grid gap-2" style={{ height: "fit-content" }}>
          {services.map((service, index) => (
            <ServicesItem key={index} {...service} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default page;
