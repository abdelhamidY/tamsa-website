import { HeaderPageProps } from "./types";
import Image from "next/image";
const HeaderPage = ({ image, title }: HeaderPageProps) => {
  return (
    <div className="w-full relative h-[400px]">
      <Image src={image} alt="header-page" fill />
      <p className="text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[60px]">
        {title}
      </p>
    </div>
  );
};
export default HeaderPage;
