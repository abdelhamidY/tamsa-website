import Image from "next/image";
import { MediaCenterItemProps } from "./types";

const MediaCenterItem = ({
  image,
  title,
  setClickedCard,
}: MediaCenterItemProps) => {
  return (
    <div
      onClick={() => {
        setClickedCard({ isClicked: true, data: {} });
      }}
      className="flex flex-col justify-center cursor-pointer "
    >
      <Image
        src={"/images/partnership.png"}
        alt="news"
        width={427}
        height={300.54}
      />
      <p className="text-center font-medium text-[20px] mt-4">
        برنامج المنظمة الموثوقة
      </p>
    </div>
  );
};

export default MediaCenterItem;
