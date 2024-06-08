"use client";
import { LeftArrowSvgrepoCom } from "@/icons";
import { useAnimation, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MoreBtn = ({
  isLtr,
  routerLink,
}: {
  isLtr: boolean;
  routerLink: string;
}) => {
  const router = useRouter();
  const textControls = useAnimation();
  const iconControls = useAnimation();
  const handleHoverStart = () => {
    textControls.start({
      x: 10, // Move text to the right
      transition: { type: "spring", stiffness: 800, damping: 10 },
    });
    iconControls.start({
      x: -10, // Move icon to the left
      transition: { type: "spring", stiffness: 800, damping: 10 },
    });
  };
  const handleHoverEnd = () => {
    textControls.start({
      x: 0,
      transition: { type: "spring", stiffness: 800, damping: 10 },
    });
    iconControls.start({
      x: 0,
      transition: { type: "spring", stiffness: 800, damping: 10 },
    });
  };
  return (
    <div className="flex gap-4 w-full justify-center">
      <motion.div
        className=" flex-row-reverse flex gap-4 justify-between bg-[#D57153] px-4 py-2 rounded-3xl text-white text-[23px] font-bold shadow-2xl cursor-pointer w-[200px] hover:bg-[#e2714f] transition-all duration-300"
        onClick={() => router.push(routerLink)}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <motion.div
          className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#fff]"
          animate={isLtr ? iconControls : textControls}
        >
          <LeftArrowSvgrepoCom width={20} height={20} fontSize={20} />
        </motion.div>

        <motion.p animate={isLtr ? textControls : iconControls}>
          المزيد
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MoreBtn;
