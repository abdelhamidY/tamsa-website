"use client";
import { useState } from "react";
import { HeaderPageProps } from "./types";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
const HeaderPage = async ({ image, title }: HeaderPageProps) => {
  const { reports } = await getDictionary("en");

  return (
    <div className="w-full relative h-[400px] header-container">
      <Image
        src={image}
        alt="header-page"
        fill
        className="object-cover filter brightness-50"
      />
      <p className="text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[60px]">
        {title}
      </p>
    </div>
  );
};
export default HeaderPage;
