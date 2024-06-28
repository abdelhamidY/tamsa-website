"use client";

import { useState } from "react";
import MediaCenterItem from "./components/MediCenterItem/MediCenterItem";
import ModalClickedCard from "./components/ModalClickedCard";

const MediaCenter = () => {
  const [clickedCard,setClickedCard] = useState({isClicked:true,data:{}})
  return (
    <>
    <section className="grid text-center gap-x-0 gap-y-7 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center mt-10 px-5">
      {[...Array(6)].map((_, index) => (
        <MediaCenterItem
          key={index}
          setClickedCard={setClickedCard}
          image="/images/partnership.png"
          title="توقيع عقد هندسة الإجراءات مع جمعية عرقة الخيرية"
        />
      ))}
    </section>
    
    <ModalClickedCard  clickedCard={clickedCard.isClicked} setClickedCard={setClickedCard}/>
    </>
  );
};

export default MediaCenter;
