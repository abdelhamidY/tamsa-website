import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[#fff]  grid grid-rows-2  pr-10 py-10  rounded-lg h-[500px]">
      
      <div className="flex flex-col gap-4 items-end ">
        <h1 className="text-[29px]">خدماتنا</h1>
        <div className='w-[80px] h-1 bg-[#D57153] mt-2 mb-5'></div>
        <div className="grid grid-cols-3 gap-4 w-full">
        
      <div className="relative ">
        <div className="absolute top-0 right-0 left-0 bottom-0">
        <Image src="/images/tamsaCompany.png" alt="company" className="filter brightness-50" />
        </div>
        <div className="absolute flex flex-col justify-center items-end w-[100%] gap-2 p-4">
        <Image src="/images/tamsaCompany.png" alt="company" width={62} height={62} />
        <p className="text-white">اي حاجة اما نشةف</p>
        </div>
      </div>
      <div className="relative ">
        <div className="absolute top-0 right-0 left-0 bottom-0">
        <Image src="/images/tamsaCompany.png" alt="company" className="filter brightness-50" />
        </div>
        <div className="absolute flex flex-col justify-center items-end w-[100%] gap-2 p-4">
        <Image src="/images/tamsaCompany.png" alt="company" width={62} height={62} />
        <p className="text-white">اي حاجة اما نشةف</p>
        </div>
      </div>
      <div className="relative ">
        <div className="absolute top-0 right-0 left-0 bottom-0">
        <Image src="/images/tamsaCompany.png" alt="company" className="filter brightness-50" />
        </div>
        <div className="absolute flex flex-col justify-center items-end w-[100%] gap-2 p-4 ">
        <Image src="/images/tamsaCompany.png" alt="company" width={62} height={62} />
        <p className="text-white">اي حاجة اما نشةف</p>
        </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default OurServices;
