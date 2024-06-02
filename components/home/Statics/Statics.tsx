import { CommunitySvgrepoCom, LeftArrowSvgrepoCom } from "@/icons";
import Image from "next/image";

const Statics = () => {
  return (
    <div className="bg-[#fff] items-center justify-center flex pr-10 py-10 rounded-lg h-[300px] gap-8 h-[500px] my-20 ">
      
      <div className="rounded-full bg-[#D57153] w-[300px] h-[300px] flex justify-start gap-8 py-12 items-center flex-col text-center ">
				<CommunitySvgrepoCom width={60}	height={60} />

				<div>
					<p className="text-[23px] text-[#fff]">عملاء مسجلون</p>
					<h1 className="text-[29px] text-[#fff]">1000+</h1>
				</div>

			</div>
      <div className="rounded-full bg-[#D57153] w-[300px] h-[300px] flex justify-start gap-8 py-12 items-center flex-col text-center ">
				<CommunitySvgrepoCom width={60}	height={60} />

				<div>
					<p className="text-[23px] text-[#fff]">عملاء مسجلون</p>
					<h1 className="text-[29px] text-[#fff]">1000+</h1>
				</div>

			</div>
      <div className="rounded-full bg-[#D57153] w-[300px] h-[300px] flex justify-start gap-8 py-12 items-center flex-col text-center ">
				<CommunitySvgrepoCom width={60}	height={60} />

				<div>
					<p className="text-[23px] text-[#fff]">عملاء مسجلون</p>
					<h1 className="text-[29px] text-[#fff]">1000+</h1>
				</div>

			</div>
      
    </div>
  );
};

export default Statics;
