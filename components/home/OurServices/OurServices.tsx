import { LeftArrowSvgrepoCom } from "@/icons";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[#fff]  grid grid-rows-2  px-10 py-10  rounded-lg h-[500px]">
      
      <div className="flex flex-col gap-2 items-end ">
      <div className="flex flex-col items-center justify-center text-center">
			<h1 className="text-[29px]">خدماتنا</h1>
        <div className='w-[80px] h-1 bg-[#D57153] mt-2 mb-5'></div>
			</div>
        <div className="flex gap-6 w-full flex-col items-center justify-center">

        <div className="grid grid-cols-3  justify-between gap-6 w-full h-[250px]">
      <div className="relative height-[250px]">

        <div className="absolute flex flex-col justify-start items-end w-[100%] gap-2 p-4 h-[250px] bg-[url('/images/tamsaCompany.png')] bg-cover bg-center filter lightness-50 alpha-50 rounded-[20px]">
        </div>
        <div className="relative flex flex-col justify-center items-end w-[100%] gap-4 p-6">
        <Image src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png" className="" alt="company" width={100} height={100} />
        <p className="text-white text-[23px] text-right font-bold shadow-2xl">تأسيس وحدات ومبادرات المسؤولية المجتمعية</p>
        </div>
      </div>
      <div className="relative height-[250px]">

        <div className="absolute flex flex-col justify-start items-end w-[100%] gap-2 p-4 h-[250px] bg-[url('/images/tamsaCompany.png')] bg-cover bg-center filter lightness-50 alpha-50 rounded-[20px]">
        </div>
        <div className="relative flex flex-col justify-center items-end w-[100%] gap-4 p-6">
        <Image src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png" className="" alt="company" width={100} height={100} />
        <p className="text-white text-[23px] text-right font-bold shadow-2xl">تأسيس وحدات ومبادرات المسؤولية المجتمعية</p>
        </div>
      </div>
      <div className="relative height-[250px]">

        <div className="absolute flex flex-col justify-start items-end w-[100%] gap-2 p-4 h-[250px] bg-[url('/images/tamsaCompany.png')] bg-cover bg-center filter lightness-50 alpha-50 rounded-[20px]">
        </div>
        <div className="relative flex flex-col justify-center items-end w-[100%] gap-4 p-6">
        <Image src="/images/partners/ffc22d274e5959c86c0797df52f6c1ee (1).png" className="" alt="company" width={100} height={100} />
        <p className="text-white text-[23px] text-right font-bold shadow-2xl">تأسيس وحدات ومبادرات المسؤولية المجتمعية</p>
        </div>
      </div>
        </div>
        <div className="flex gap-4 w-full justify-center">

<div className="flex gap-4 justify-between bg-[#D57153] px-4 py-2 rounded-3xl text-white text-[23px] font-bold shadow-2xl cursor-pointer w-[200px] hover:bg-[#e2714f] transition-all duration-300">
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#fff]">

  <LeftArrowSvgrepoCom width={20} height={20} fontSize={20} />
        </div>
  <p>المزيد</p>
</div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default OurServices;
