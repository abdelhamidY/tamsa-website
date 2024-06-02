import SvgTamsaLogo from "@/icons/TamsaLogo";
import UploadFile from "./uploadFile";

const ItemVersion = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className=" py-[20px] border-b-[3px]">
    <div className="flex items-center gap-10 py-[20px] ">
      <SvgTamsaLogo />
      <div className="flex flex-col gap-2">
        <p className="text-[23px] font-medium text-[#121214]">{title}</p>
        <p className="w-[898.38px]">{description}</p>
      </div>
    </div>
    <div className="flex justify-end">
      <UploadFile />
    </div>
  </div>
);

export default ItemVersion;
