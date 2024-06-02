import { CommunitySvgrepoCom, LeftArrowSvgrepoCom } from "@/icons";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-[#fff] items-center justify-center flex flex-col px-10 py-10 rounded-lg  gap-8 h-[500px] my-20 ">
			<div className="flex flex-col items-center justify-center text-center">
			<h1 className="text-[29px]">قالوا عنا</h1>
        <div className='w-[80px] h-1 bg-[#D57153] mt-2 mb-5'></div>
			</div>
      
      <div className="bg-[#fff] w-[450px]  h-[280px] flex gap-5 flex-col py-10 px-10 shadow-2xl items-end justify-start">
				<div className="flex items-center justify-center rounded-full gap-5">
					<h3 className="text-[23px] font-bold">أحمد أحمد</h3>
					<Image className="rounded-full h-[100px] w-[100px]" src={'/images/partners/173a586731066381a669f9f2e893cb0b.jpg'} alt="client" width={100} height={100}/>
				</div>
				<div className="w-[400px]">
					<p className="text-end">
					كان لي الشرف بالتعاون مع شركة تام، ويجب أن أقول إن طاقمهم المتميز وشراكاتهم المؤثرة في قطاع غير الربح تعكس التزامهم بالتغيير الإيجابي
					</p>
				</div>

				<div>
					<p>15 فبراير 2023</p>
				</div>
			

			</div>
    </div>
  );
};

export default Testimonials;
