import TrustedCharityItem from "@/components/TrustedCharity/TrustedCharityItem/TrustedCharityItem";
import DistinguishesItem from "@/components/aboutUs/DistinguishesItem";
import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";
import { Locale } from "@/i18n.config";
import { TamsaLogo } from "@/icons";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";
import checkImage from "@/public/icons/check.png";
import ideaImage from "@/public/icons/idea.png";
import chatImage from "@/public/icons/chatting.png";
import givingLoveImage from "@/public/icons/givingLove.png";
const dummyArabicData = [
  {
    id: 1,
    imgSrc: checkImage,
    description:
      "وكالة حصرية مع منظمة NCVO البريطانية المتخصصة في معايير الجودة في القطاع غير الربحي.",
  },
  {
    id: 2,
    imgSrc: ideaImage,
    description: "خبرة متخصصة وممتدة في مجال الجودة والتقييم.ميزات جديدة",
  },
  {
    id: 3,
    imgSrc: chatImage,
    description: "طاقم إداري مميز وقائمة مستشارين ومقيمين معتمدين حول المملكة.",
  },
  {
    id: 4,
    imgSrc: givingLoveImage,
    description: "شراكات تطوير متنوعة في القطاع غير الربحي بمختلف مجالاته.",
  },
];

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { aboutUs } = await getDictionary(lang);
  return (
    <section className="has-app-max-width">
      <HeaderPage image="/images/trustedCharity.png" title={aboutUs.title} />

      <main className="lg:grid flex items-center flex-wrap   grid-cols-1  lg:grid-cols-3 gap-10 mt-10">
        {[...Array(3)].map((_, index) => (
          <TrustedCharityItem key={index} />
        ))}
      </main>

      <div className="p-5 mt-10">
        <div
          className="flex flex-col gap-5  overflow-hidden  xl:gap-0 xl:flex-row flex-start justify-between bg-gradient-to-r from-[#29292E] to-[#343441] p-5"
          style={{ direction: "ltr" }}
        >
          <div className="relative lg:-translate-y-20 lg:h-[400px]">
            <div className=" grid order-1   xl:-order-1 grid-cols-1 sm:grid-cols-2 gap-5  grid-flow-row">
              <Image
                src={"/images/trustcharityInfo.png"}
                alt="trustedCharity"
                className="object-cover h-80 lg:-translate-y-20 w-full rounded-xl overflow-hidden"
                width={200}
                height={800}
              />
              <Image
                src={"/images/trustcharityInfo.png"}
                alt="trustedCharity"
                className="h-80  w-full lg:translate-y-14 rounded-xl  "
                width={200}
                height={800}
              />
              <Image
                src={"/images/trustcharityInfo.png"}
                alt="trustedCharity"
                className="h-80 lg:-translate-y-20 w-full rounded-xl overflow-hidden"
                width={547}
                height={260.88}
              />
              <Image
                className="h-80  w-full lg:translate-y-14 rounded-xl  "
                src={"/images/trustcharityInfo.png"}
                alt="trustedCharity"
                width={547}
                height={260.88}
              />
            </div>
          </div>
          <div className="flex w-full  flex-col items-end justify-center">
            <h1 className="font-medium text-[29px] mb-0 text-white">
              ماهو معيار المنظمة الموثوقة ؟
            </h1>
            <div className="w-[80px] h-1 bg-[#D57153] mt-2 mb-5"></div>
            <p className=" font-light text-[16px] text-white">
              هو معيار بريطاني لإدارة الجودة ويملكه المجلس الوطني للمنظمات
              التطوعية NCVO.
            </p>

            <p className="md:w-[693.5px] text-end font-light text-[16px] text-white">
              صمم هذا المعيار خصيصاً للقطاع غير الربحي بمختلف تخصصاته، حيث يضم
              مجموعة من المؤشرات التي تتميز بوضوحها وسهولة استخِدامها وشمولها،
              والتي تهدف إلى إدارة المنظمة بكفاءة وفاعلية.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10  p-5 gap-10">
        <div>
          <Image
            className="w-full h-full object-cover"
            src={"/images/trustcharityInfo.png"}
            alt="trustedCharity"
            width={547}
            height={260.88}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-rows-2 gap-10 sm:grid-cols-2">
          {dummyArabicData.map((item) => (
            <DistinguishesItem
              key={item.id}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
