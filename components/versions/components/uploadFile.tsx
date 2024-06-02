import SvgArrowBottomContain from "@/icons/ArrowBottomContain";

const UploadFile = () => {
  return (
    <div className="flex items-center justify-between px-2 w-[160px] bg-[#D57153] h-[48px] rounded-full ">
      <p className="text-[16px] text-white">تحميل</p>
      <SvgArrowBottomContain className="cursor-pointer" />
    </div>
  );
};

export default UploadFile;
