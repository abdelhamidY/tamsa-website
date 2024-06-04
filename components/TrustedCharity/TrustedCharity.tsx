import Image from "next/image";
import TrustedCharityItem from "./TrustedCharityItem/TrustedCharityItem";
const TrustedCharity = () => {
  return (
    <section className="has-app-max-width px-10">
      <div className="flex flex-col lg:flex-row justify-between gap-4 pt-20">
        <div className="flex flex-[1.5_1.5_0%] gap-5 flex-col  items-start">
          <h1 className="  font-medium text-[29px]">
            ماهو معيار المنظمة الموثوقة ؟
          </h1>
          <p className=" font-light text-[16px] ">
            هو معيار بريطاني لإدارة الجودة ويملكه المجلس الوطني للمنظمات
            التطوعية NCVO.
          </p>

          <p className=" text-start font-light text-[16px] ">
            صمم هذا المعيار خصيصاً للقطاع غير الربحي بمختلف تخصصاته، حيث يضم
            مجموعة من المؤشرات التي تتميز بوضوحها وسهولة استخِدامها وشمولها،
            والتي تهدف إلى إدارة المنظمة بكفاءة وفاعلية.
          </p>
        </div>
        <div className="relative flex-1 w-full min-h-80  lg:min-h-64 overflow-hidden rounded-md">

        <Image
          src={"/images/trustcharityInfo.png"}
          alt="trustedCharity"
          fill={true}
          className=" object-cover object-right sm:object-center"
          // width={547}
          // height={260.88}
        />
        </div>
      </div>
      <div className="flex justify-end flex-col  items-start ">
        <h1 className=" pt-5 lg:pt-0 font-medium text-[29px] mb-5">
          مميزات المنظمة الموثوقة
        </h1>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {[...Array(6)].map((_, index) => (
            <TrustedCharityItem key={index} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default TrustedCharity;
