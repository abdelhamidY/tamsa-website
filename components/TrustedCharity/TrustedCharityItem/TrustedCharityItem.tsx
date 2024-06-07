import SvgQuality from "@/icons/Quality";

const TrustedCharityItem = () => {
  return (
    <div className="bg-[#EAFEFF] relative group  flex  gap-2  flex-col items-center p-10 overflow-hidden ">
    <div className="w-10 h-10  bg-[#EAFEFF] z-0 rounded-full hover absolute duration-300 inset-1/2 group-hover:opacity-100 group-hover:scale-[26] transition-all group-hover:duration-1000 group-hover:bg-[#006067]  group-hover:z-1"></div>
      <SvgQuality className="relative"/>
      <p className="relative font-medium text-[23px]  max-w-[403px] text-center group-hover:text-white duration-200 transition-all text-[#29292E]">
        يساعدك على تضمين الجودة في الأنشطة اليومية​
      </p>
      <p className="relative group-hover:text-white font-light text-[18px]  text-center duration-200 transition-all text-[#29292E]">
        بحيث تصبح جزءًا لا يتجزأ من تخطيطك وإدارتك والطريقة التي تفعل بها
        الأشياء والخدمات التي تقدمها للمستخدمين. انه الخيار الأفضل لبناء تحسين
        الجودة في مؤسستك بشكل فعال
      </p>
    </div>
  );
};
export default TrustedCharityItem;
