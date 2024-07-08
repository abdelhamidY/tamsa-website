"use client";
import { LeftArrowSvgrepoCom } from "@/icons";
import { appRoutes } from "@/utils/constants/app.routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
const OurServices = ({ isLtr }: { isLtr: boolean }) => {
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
            <div className="group rounded-lg relative h-[250px] hover:from-gray-900 hover:to-black overflow-hidden transition-all duration-500 bg-gradient-to-b from-black to-gray-800">
              <Image
                alt="background"
                src={"/images/c8c858e2ccb758204dff82667cf20517.jpg"}
                className="object-cover group-hover:scale-125 transition-all duration-500  opacity-50  object-center"
                fill
              />
              <div className=" relative flex flex-col justify-center items-start w-[100%] gap-4 p-6">
                <Image
                  src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png"
                  className="group-hover:scale-75 rounded-md transition-all duration-500"
                  alt="company"
                  width={75}
                  height={75}
                />
                <p className="text-white text-[23px] group-hover:-translate-y-4 transition-all duration-500 text-right font-bold ">
                  تأسيس وحدات ومبادرات المسؤولية المجتمعية
                </p>
                <p className="opacity-0 transition-all duration-500 translate-y-full group-hover:-translate-y-5 text-white group-hover:opacity-100">
                  2023
                </p>
              </div>
            </div>
            <div className="group rounded-lg relative h-[250px] hover:from-gray-900 hover:to-black overflow-hidden transition-all duration-500 bg-gradient-to-b from-black to-gray-800">
              <Image
                alt="."
                src={"/images/c8c858e2ccb758204dff82667cf20517.jpg"}
                className="object-cover group-hover:scale-125 transition-all duration-500  opacity-50  object-center"
                fill
              />
              <div className=" relative flex flex-col justify-center items-start w-[100%] gap-4 p-6">
                <Image
                  src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png"
                  className="group-hover:scale-75 rounded-md transition-all duration-500"
                  alt="company"
                  width={75}
                  height={75}
                />
                <p className="text-white text-[23px] group-hover:-translate-y-4 transition-all duration-500 text-right font-bold ">
                  تأسيس وحدات ومبادرات المسؤولية المجتمعية
                </p>
                <p className="opacity-0 transition-all duration-500 translate-y-full group-hover:-translate-y-5 text-white group-hover:opacity-100">
                  2023
                </p>
              </div>
            </div>
            <div className="group rounded-lg relative h-[250px] hover:from-gray-900 hover:to-black overflow-hidden transition-all duration-500 bg-gradient-to-b from-black to-gray-800">
              <Image
                alt="."
                src={"/images/7a06dcc844ae8fdea0f49e0ce31edbf8.jpg"}
                className="object-cover group-hover:scale-125 transition-all duration-500  opacity-50  object-center"
                fill
              />
              <div className=" relative flex flex-col justify-center items-start w-[100%] gap-4 p-6">
                <Image
                  src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png"
                  className="group-hover:scale-75 rounded-md transition-all duration-500"
                  alt="company"
                  width={75}
                  height={75}
                />
                <p className="text-white text-[23px] group-hover:-translate-y-4 transition-all duration-500 text-right font-bold ">
                  تأهيل الوحدات المستدامة
                </p>
                <p className="opacity-0 transition-all duration-500 translate-y-full group-hover:-translate-y-5 text-white group-hover:opacity-100">
                  2023
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full justify-center">
            <motion.div
              className=" flex-row-reverse flex gap-4 justify-between bg-[#D57153] px-4 py-2 rounded-3xl text-white text-[23px] font-bold shadow-2xl cursor-pointer w-[200px] hover:bg-[#e2714f] transition-all duration-300"
              onClick={() => router.push(appRoutes.SERVICES)}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#fff]"
                animate={isLtr ? iconControls : textControls}
              >
                <LeftArrowSvgrepoCom width={20} height={20} fontSize={20} />
              </motion.div>

              <motion.p animate={isLtr ? textControls : iconControls}>
                المزيد
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
