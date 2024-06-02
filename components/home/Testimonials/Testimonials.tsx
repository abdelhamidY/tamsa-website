"use client";

import { CommunitySvgrepoCom, LeftArrowSvgrepoCom } from "@/icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import Pagination from 'swiper/core'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/bundle";
import { Pagination } from "swiper/modules";

// const swiper = Swiper({
// 	modules: [Pagination],
// });

const Testimonials = () => {
  return (
    <div className="bg-[#fff] items-center justify-center flex flex-col px-10 py-10 rounded-lg h-auto gap-8 sm:h-[500px] my-20 ">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[29px]">قالوا عنا</h1>
        <div className="w-[80px] h-1 bg-[#D57153] mt-2 mb-5"></div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        className="bg-[#fff]  w-full sm:w-[450px] h-auto sm:h-[350px] flex gap-5 flex-col py-10 px-10 shadow-2xl items-end justify-start"
      >
        <SwiperSlide className="bg-[#fff] w-full sm:w-[450px] h-auto sm:h-[350px] flex gap-5 flex-col py-10 px-10 shadow-2xl items-end justify-start">
          <div className="flex items-center flex-row-reverse justify-end rounded-full gap-5 mb-2">
            <h3 className="text-[23px] font-bold">أحمد أحمد</h3>
            <Image
              className="rounded-full h-[100px] w-[100px]"
              src={"/images/partners/173a586731066381a669f9f2e893cb0b.jpg"}
              alt="client"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full sm:w-[400px] h-auto  flex justify-end mb-2">
            <p className="text-start">
              كان لي الشرف بالتعاون مع شركة تام، ويجب أن أقول إن طاقمهم المتميز
              وشراكاتهم المؤثرة في قطاع غير الربح تعكس التزامهم بالتغيير
              الإيجابي
            </p>
          </div>

          <div className="w-full sm:w-[400px] start justify-end mb-2">
            <p className="text-start">15 فبراير 2023</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#fff] w-full md:w-[450px] h-[450px] md:h-[350px] flex gap-5 flex-col py-10 px-10 shadow-2xl items-end justify-start">
          <div className="flex items-center flex-row-reverse justify-end rounded-full gap-5 mb-2">
            <h3 className="text-[23px] font-bold">أحمد أحمد</h3>
            <Image
              className="rounded-full h-[100px] w-[100px]"
              src={"/images/partners/173a586731066381a669f9f2e893cb0b.jpg"}
              alt="client"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full md:w-[400px] flex justify-end mb-2">
            <p className="text-start">
              كان لي الشرف بالتعاون مع شركة تام، ويجب أن أقول إن طاقمهم المتميز
              وشراكاتهم المؤثرة في قطاع غير الربح تعكس التزامهم بالتغيير
              الإيجابي
            </p>
          </div>

          <div className="w-full md:w-[400px] start justify-end mb-2">
            <p className="text-start">15 فبراير 2023</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
