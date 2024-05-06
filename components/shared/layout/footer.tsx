import SvgTamsaLogoWhite from "@/icons/TamsaLogoWhite";
const Footer: React.FC = () => {
  return (
    <footer className="relative mt-[16rem]  bg-[#81361F] pt-20 text-white ">
      <div className="mx-auto max-w-screen-xl px-4 pt-40  sm:px-6 md:py-10  ">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-3 gap-8 lg:mt-0 lg:grid-cols-3 lg:justify-items-center lg:gap-x-[1rem] lg:gap-y-16">
            <div className="order-3 flex flex-col items-end w-full">
              <SvgTamsaLogoWhite />
              <p className="text-[#F0F0F0] opacity-80 text-end ">
                تفردنا في تقديم حلول إدارية مبتكرة وبرامج تدريبية مخصصة، نسعى
                لرفع مستوى الجودة وتحفيز التطور في قطاع الأعمال غير ربحى
              </p>
            </div>
            <div className="order-2  flex flex-col  items-end ">
              <h2 className="text-[23px] font-bold mb-3">معلومات عن الشركة</h2>

              <li className="opacity-80 ">العنوان</li>
              <li className="opacity-80">البريد الالكترونى</li>
              <li className="opacity-80">رقم الموبايل</li>
              <li className="opacity-80">البريد الالكترونى</li>
            </div>
            <div className="order-1 flex flex-col  items-end">
              <h2 className="text-[23px] font-bold  mb-3">معلومات عن الشركة</h2>

              <li className="opacity-80">العنوان</li>
              <li className="opacity-80">البريد الالكترونى</li>
              <li className="opacity-80">رقم الموبايل</li>
              <li className="opacity-80">البريد الالكترونى</li>
            </div>
          </div>
        </div>

        <div className="mt-8  border-gray-300 pt-3">
          <div className="sm:flex sm:justify-between lg:flex lg:justify-center">
            <p className="text-xs text-gray-500">Copyright ©taamsa.com 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
