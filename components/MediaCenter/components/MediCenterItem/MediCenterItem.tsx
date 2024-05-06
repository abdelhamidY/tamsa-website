import Image from "next/image";
import { MediaCenterItemProps } from "./types";

const MediaCenterItem = ({ image, title }: MediaCenterItemProps) => {
  return (
    <div className="flex flex-col justify-center ">
      <Image
        src={"/images/partnership.png"}
        alt="news"
        width={427}
        height={300.54}
      />
      <p className="text-center font-medium text-[23px]">
        توقيع عقد هندسة الإجراءات مع جمعية عرقة الخيرية
      </p>
    </div>
  );
};

export default MediaCenterItem;
