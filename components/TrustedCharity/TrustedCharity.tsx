import Image from "next/image";
import TrustedCharityItem from "./TrustedCharityItem/TrustedCharityItem";
const TrustedCharity = () => {
  return (
    <section className="has-app-max-width px-10">
      <div className="flex justify-between pt-20">
        <div className="flex gap-5 flex-col  items-start">
          <h1 className="  font-medium text-[29px]">
            ماهو معيار المنظمة الموثوقة ؟
          </h1>
          <p className=" font-light text-[16px] ">
            هو معيار بريطاني لإدارة الجودة ويملكه المجلس الوطني للمنظمات
            التطوعية NCVO.
          </p>

          <p className="w-[693.5px] text-start font-light text-[16px] ">
            صمم هذا المعيار خصيصاً للقطاع غير الربحي بمختلف تخصصاته، حيث يضم
            مجموعة من المؤشرات التي تتميز بوضوحها وسهولة استخِدامها وشمولها،
            والتي تهدف إلى إدارة المنظمة بكفاءة وفاعلية.
          </p>
        </div>
        <Image
          src={"/images/trustcharityInfo.png"}
          alt="trustedCharity"
          width={547}
          height={260.88}
        />
      </div>
      <div className="flex justify-end flex-col  items-start ">
        <h1 className="  font-medium text-[29px] mb-5">
          مميزات المنظمة الموثوقة
        </h1>

        <main className="grid grid-cols-3  gap-10">
          {[...Array(6)].map((_, index) => (
            <TrustedCharityItem key={index} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default TrustedCharity;
