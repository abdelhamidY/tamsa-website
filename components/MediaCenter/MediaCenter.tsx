"use client";

import MediaCenterItem from "./components/MediCenterItem/MediCenterItem";

const MediaCenter = () => {
  return (
    <section className="grid  grid-cols-3 justify-items-center">
      {[...Array(6)].map((_, index) => (
        <MediaCenterItem
          key={index}
          image="/images/partnership.png"
          title="توقيع عقد هندسة الإجراءات مع جمعية عرقة الخيرية"
        />
      ))}
    </section>
  );
};

export default MediaCenter;
