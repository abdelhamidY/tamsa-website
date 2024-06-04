"use client";
import { LeftArrowSvgrepoCom } from "@/icons";
import { appRoutes } from "@/utils/constants/app.routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
const OurServices = () => {
  const router = useRouter();
  const textControls = useAnimation();
  const iconControls = useAnimation();
  const handleHoverStart = () => {
    textControls.start({
      x: 10, // Move text to the right
      transition: { type: "spring", stiffness: 800, damping: 10 },
    });
    iconControls.start({
      x: -10, // Move icon to the left
      transition: { type: "spring", stiffness: 800, damping: 10 },
    });
  };
  const handleHoverEnd = () => {
    textControls.start({
      x: 0,
      transition: { type: "spring", stiffness: 800, damping: 10 },
    });
    iconControls.start({
      x: 0,
      transition: { type: "spring", stiffness: 800, damping: 10 },
    });
  };

  return (
    <div className="bg-[#fff]  grid lg:grid-rows-2  px-10 py-10  rounded-lg lg:h-[500px]">
      <div className="flex flex-col gap-2 items-start ">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[29px]">خدماتنا</h1>
          <div className="w-[80px] h-1 bg-[#D57153] mt-2 mb-5"></div>
        </div>
        <div className="flex gap-6 w-full flex-col items-center justify-center">
          <div className="grid lg:grid-cols-3   grid-cols-1  justify-between gap-6 w-full lg:h-[250px]">
            <div className="relative h-[250px]">
              <div className="absolute flex flex-col justify-start items-end w-[100%] gap-2 p-4 h-[250px] bg-[url('/images/tamsaCompany.png')] bg-cover bg-center filter lightness-50 alpha-50 rounded-[20px]"></div>
              <div className="group relative flex flex-col justify-center items-start w-[100%] gap-4 p-6">
                <Image
                  src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png"
                  className="group-hover:scale-75 transition-all duration-500"
                  alt="company"
                  width={75}
                  height={75}
                />
                <p className="text-white text-[23px] text-right font-bold shadow-2xl">
                  تأسيس وحدات ومبادرات المسؤولية المجتمعية
                </p>
              </div>
            </div>
            <div className="relative h-[250px]">
              <div className="absolute flex flex-col justify-start items-end w-[100%] gap-2 p-4 h-[250px] bg-[url('/images/tamsaCompany.png')] bg-cover bg-center filter lightness-50 alpha-50 rounded-[20px]"></div>
              <div className="relative flex flex-col justify-center items-end w-[100%] gap-4 p-6">
                <Image
                  src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png"
                  className=""
                  alt="company"
                  width={100}
                  height={100}
                />
                <p className="text-white text-[23px] text-right font-bold shadow-2xl">
                  تأسيس وحدات ومبادرات المسؤولية المجتمعية
                </p>
              </div>
            </div>
            <div className="relative h-[250px]">
              <div className="absolute flex flex-col justify-start items-end w-[100%] gap-2 p-4 h-[250px] bg-[url('/images/tamsaCompany.png')] bg-cover bg-center filter lightness-50 alpha-50 rounded-[20px]"></div>
              <div className="relative flex flex-col justify-center items-end w-[100%] gap-4 p-6">
                <Image
                  src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png"
                  className=""
                  alt="company"
                  width={100}
                  height={100}
                />
                <p className="text-white text-[23px] text-right font-bold shadow-2xl">
                  تأسيس وحدات ومبادرات المسؤولية المجتمعية
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full justify-center">
            <motion.div
              className="flex gap-4 justify-between bg-[#D57153] px-4 py-2 rounded-3xl text-white text-[23px] font-bold shadow-2xl cursor-pointer w-[200px] hover:bg-[#e2714f] transition-all duration-300"
              onClick={() => router.push(appRoutes.SERVICES)}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#fff]"
                animate={iconControls}
              >
                <LeftArrowSvgrepoCom width={20} height={20} fontSize={20} />
              </motion.div>

              <motion.p animate={textControls}>المزيد</motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
