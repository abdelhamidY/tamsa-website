"use client";

import MediaCenterItem from "./components/MediCenterItem/MediCenterItem";

const MediaCenter = () => {
  return (
    <section className="grid text-center gap-x-0 gap-y-7  grid-cols-3 justify-items-center mt-10 pl-6">
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
