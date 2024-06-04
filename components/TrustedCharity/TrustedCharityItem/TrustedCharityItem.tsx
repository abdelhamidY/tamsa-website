import SvgQuality from "@/icons/Quality";

const TrustedCharityItem = () => {
  return (
    <div className="bg-[#EAFEFF]  flex  gap-2  flex-col items-center p-10 ">
      <SvgQuality />
      <p className=" font-medium text-[23px]  max-w-[403px] text-center  text-[#29292E]">
        يساعدك على تضمين الجودة في الأنشطة اليومية​
      </p>
      <p className="font-light text-[18px]  text-center  text-[#29292E]">
        بحيث تصبح جزءًا لا يتجزأ من تخطيطك وإدارتك والطريقة التي تفعل بها
        الأشياء والخدمات التي تقدمها للمستخدمين. انه الخيار الأفضل لبناء تحسين
        الجودة في مؤسستك بشكل فعال
      </p>
    </div>
  );
};
export default TrustedCharityItem;
