import SvgTamsaLogoWhite from "@/icons/TamsaLogoWhite";
import Image from "next/image";
import Link from "next/link";
import instagramImage from "@/public/icons/instagram.png";
import facebookImage from "@/public/icons/facebook.png";
import twitterImage from "@/public/icons/twitter.png";
const Footer: React.FC = () => {
  return (
    <footer className="relative mt-[2rem]   bg-[#81361F] xl:pt-16  pt-10 text-white ">
      <div className="mx-auto max-w-screen-xl px-4 xl:pt-10 pt-5  sm:px-6 md:py-10  ">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-3 lg:justify-items-start lg:gap-x-[1rem] lg:gap-y-16">
            <div className="rtl:lg:order-1 lg:order-3 flex gap-3 lg:gap-3 flex-col items-start  col-span-2 order-1 lg:col-auto w-full">
              <SvgTamsaLogoWhite />
              <p className="text-[#F0F0F0] opacity-80  ">
                تفردنا في تقديم حلول إدارية مبتكرة وبرامج تدريبية مخصصة، نسعى
                لرفع مستوى الجودة وتحفيز التطور في قطاع الأعمال غير ربحى
              </p>
            </div>
            <div className="order-2  items-start gap-3 flex lg:ps-10 flex-col col-span-2 sm:col-auto  ">
              <h2 className="text-[23px] font-bold mb-3">معلومات عن الشركة</h2>

              <li className="opacity-80 ">
                <Link href="">من نحن</Link>
              </li>

              <li className="opacity-80 ">
                <Link href="">خدمتنا</Link>
              </li>

              <li className="opacity-80 ">
                <Link href="">شركاؤنا</Link>
              </li>
              <li className="opacity-80 ">
                <Link href="">الاخبار</Link>
              </li>
            </div>
            <div className="rtl:order-3 order-1 flex flex-col gap-3 col-span-2 sm:col-auto items-start">
              <h2 className="text-[23px] font-bold items-start  mb-3">
                تواصل معنا
              </h2>
              <p className="text-[#F0F0F0] opacity-80 text-start ">
                نحن نرحب بأي استفسارات أو تعاون ونتطلع إلي الاستماع منك قريبًا.{" "}
              </p>
              <p className="flex gap-2">
                اتصل بنا <a href="tel:+0557373629"> 0557373629</a>
              </p>

              <ul className="flex gap-5">
                <li>
                  <a href="" className="hover:brightness-90">
                    <Image width={32} height={32} src={instagramImage} alt="" />
                  </a>
                </li>
                <li>
                  <a href="" className="hover:brightness-90">
                    <Image width={32} height={32} src={facebookImage} alt="" />
                  </a>{" "}
                </li>
                <li>
                  <a href="" className="hover:brightness-90">
                    <Image width={32} height={32} src={twitterImage} alt="" />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8  border-gray-300 pt-3">
          <div className="sm:flex sm:justify-between lg:flex lg:justify-center">
            <p className="text-xs text-gray-200">Copyright ©taamsa.com 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
