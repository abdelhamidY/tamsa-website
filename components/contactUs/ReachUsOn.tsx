import Image, { StaticImageData } from "next/image";
import React from "react";

const ReachUsOn = ({
  href,
  label,
  link,
  img,
}: {
  href: string;
  label: string;
  link: string;
  img: string | StaticImageData;
}) => {
  return (
    <div className="flex sm:justify-center sm:items-center gap-4 ">
      <div className="bg-[#F9EBE7] rounded-full p-1 max-h-12 max-w-12 h-full w-full aspect-square flex items-center justify-center">
        <Image alt="" src={img} width={32} height={32} />
      </div>
      <div className="flex flex-col ">
        <span>{label}</span>
        <a className="text-[#D57153] hover:underline" href={href}>
          {link}
        </a>
      </div>
    </div>
  );
};

export default ReachUsOn;
