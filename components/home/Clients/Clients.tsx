import { CommunitySvgrepoCom, LeftArrowSvgrepoCom, Logo } from "@/icons";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="bg-[#fff] items-center justify-center flex flex-col px-10 py-10 rounded-lg  gap-8 md:h-[500px] my-20 ">
			<div className="flex flex-col items-center justify-center text-center">
			<h1 className="text-[29px]">عملاؤنا</h1>
        <div className='w-[80px] h-1 bg-[#D57153] mt-2 mb-5'></div>
			</div>
      
      <div   className="bg-[#fff] w-full lg:w-3/6 md:h-[400px] h-auto grid grid-cols-3 grid-rows-6  md:grid-cols-6 md:grid-rows-3 py-5 px-2 shadow-2xl items-center justify-center">
				{Array.from({length: 18}).map((item, index) => {
					return(

				<div  className="flex items-center justify-center" key={index}>
				<Image src={'/images/partners/ec181d1119f666b350beaf7ecced6fba.png'} alt="client" width={100} height={100}/>
				</div>
					)
				})}
				

			</div>
    </div>
  );
};

export default Clients;
