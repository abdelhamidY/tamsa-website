import { CommunitySvgrepoCom, LeftArrowSvgrepoCom } from "@/icons";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

const Statics = () => {
  return (
    <div className="bg-[#fff] flex-col md:flex-row items-center h-auto justify-center flex pr-10 py-10 rounded-lg md:h-[300px] gap-14 h-[500px] my-20 ">
      <div className="rounded-full bg-[#D57153] w-[250px] justify-center h-[250px] py-0  lg:w-[300px] lg:h-[300px] flex lg:justify-start gap-8 lg:py-12 items-center flex-col text-center ">
        <CommunitySvgrepoCom width={60} height={60} />

        <div>
          <p className="text-[23px] text-[#fff]">مبادرات</p>
          <h1 className="text-[29px] text-[#fff]">
            {" "}
            <AnimatedCounter from={0} to={1000} />+
          </h1>
        </div>
      </div>
      <div className="rounded-full bg-[#D57153] w-[250px] justify-center h-[250px] py-0  lg:w-[300px] lg:h-[300px] flex lg:justify-start gap-8 lg:py-12 items-center flex-col text-center ">
        <CommunitySvgrepoCom width={60} height={60} />

        <div>
          <p className="text-[23px] text-[#fff]">عميل</p>

          <h1 className="text-[29px] text-[#fff]">
            <AnimatedCounter from={0} to={1000} />+
          </h1>
        </div>
      </div>
      <div className="rounded-full bg-[#D57153] w-[250px] justify-center h-[250px] py-0  lg:w-[300px] lg:h-[300px] flex lg:justify-start gap-8 lg:py-12 items-center flex-col text-center ">
        <CommunitySvgrepoCom width={60} height={60} />

        <div>
          <p className="text-[23px] text-[#fff]">مستشار</p>
          <h1 className="text-[29px] text-[#fff]">
            {" "}
            <AnimatedCounter from={0} to={1000} />+
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Statics;
