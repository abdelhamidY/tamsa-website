"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  useEffect,
} from "react";
import closeImg from "@/public/icons/close.png";
import modalImage from "@/public/images/modal-image.png";
const ModalClickedCard = ({
  clickedCard,
  setClickedCard,
}: {
  clickedCard: boolean;
  setClickedCard: Dispatch<
    SetStateAction<{
      isClicked: boolean;
      data: {};
    }>
  >;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    hidden: { translateY: "100vh", opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  };

  useEffect(() => {
    if (clickedCard) {
      setIsVisible(true);
    }
  }, [clickedCard]);

  const handleAnimationComplete = (definition: any) => {
    if (definition === "hidden") {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <motion.div
          ref={ref}
          className={`fixed w-screen flex justify-center z-30 inset-0 duration-500 min-h-screen overflow-y-scroll ${
            clickedCard ? "bg-gray-900/50 " : "bg-transparent "
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial="hidden"
              transition={{ duration: 0.7, ease: "easeOut" }}
              animate={clickedCard ? "visible" : "hidden"}
              exit="hidden"
              variants={variants}
              onAnimationComplete={handleAnimationComplete}
              className="lg:grid lg:grid-cols-2    flex flex-col gap-4 has-app-max-width !mx-5 bg-white px-12 py-10 "
            >
              <button
                className="col-span-2 flex justify-start max-w-max text-start items-start   "
                onClick={() => setClickedCard({ isClicked: false, data: {} })}
              >
                <Image src={closeImg} alt="" width={16} height={16} />
              </button>
              <div className="flex w-100 flex-col gap-7 pt-5">
                <h3 className="text-2xl">35 مستشار لمعيار الجودة العالمى</h3>
                <p>
                  برعاية كريمة من بنك الجزيرة وضمن برنامجه للمسؤولية الاجتماعية
                  (خير الجزيرة لأهل الجزيرة) ؛ رعى البنك
                  برنامجاً تأهيلياً لتدريب وتأهيل 35 مستشارًا في تطوير عمل
                  الجمعيات الأهلية بالمملكة العربية السعودية، بالتعاون مع شركة
                  تام للخدمات الإدارية المتقدمة؛ وهو برنامج تأهيلي يمكن
                  المستشارين من تطوير عمل الجمعيات الأهلية وفق دليل عالمي
                  بريطاني متخصص في الجودة وهي علامة TRUSTED CHARITY
                  MARK بالتعاون مع منظمةNCVO  لتطوير المنظمات غير الربحية
                  ببريطانيا.
                </p>
                <p>
                  ويتناول برنامج التأهيل تمكين المستشارين من تقييم الجمعيات في
                  ٩١ مؤشر تتوزع على  ١١ مجال من مجالات الجودة كالحوكمة والتخطيط
                  والعمليات الإدارية وخدمات المستفيدين وإدارة وحوكمة التبرعات
                  والمصارف الخيرية وبناء الشراكات وغيرها من المجالات التي
                  تسهم في تطوير خدمات وأعمال الجمعيات في المملكة العربية
                  السعودية.
                </p>
                <p>
                  ويعتبر هذا البرنامج من ضمن مشروع رعاية بنك الجزيرة للإصدار
                  الأول من علامة الجودة البريطانية TRUSTED CHARITY MARK، والذي
                  يتضمن:  توزيع الحقيبة العلمية للمعيار على 100 جمعية حول
                  المملكة واستخراج تحليل أولي مبني على منهجية العلامة البريطانية
                  للجودة TRUSTED CHARITY MARK.  تأهيل 35 مستشاراً متخصصاً في
                  المعيار.  إنشاء منصة الكترونية للمعيار تمكن المنظمات الأهلية
                  من تطبيق مجالات المعيار ومعرفة نقاط القوة والضعف وعمليات
                  التحسين بدعم متواصل مع مستشار المعيار.
                </p>
              </div>
              <Image alt="" src={modalImage} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default ModalClickedCard;
