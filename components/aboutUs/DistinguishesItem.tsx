import Image, { StaticImageData } from "next/image";
import React from "react";

type DistinguishesItem = {
  imgSrc: string |StaticImageData;
  description: string;
};
const DistinguishesItem = ({ imgSrc, description }: DistinguishesItem) => {
  return (
    <div className="bg-[#FCF6F4] py-5 flex  gap-5  flex-col items-center justify-center p-1 rounded-lg max-h-[200px]">
      <Image src={imgSrc} alt={description} width={62} height={62} />
      <p className=" font-medium text-center  text-[#29292E]">{description}</p>
    </div>
  );
};

export default DistinguishesItem;
