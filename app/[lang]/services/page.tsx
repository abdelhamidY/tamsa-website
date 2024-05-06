import MediaCenter from "@/components/MediaCenter/MediaCenter";
import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";
import Image from "next/image";

const page = () => {
  return (
    <section className="has-app-max-width mt-10">
      <HeaderPage image="/images/sericesimgs.jpg" title="خدماتنا" />

      <section className="grid grid-cols-2 gap-4 mt-5">
        <div className="bg-[#FAF9F4] p-4 rounded-lg">HI</div>
        <div className="grid gap-2">
        <div className="bg-[#CFFCFF] p-4 rounded-lg text-end flex flex-row items-center gap-2 justify-end hover:cursor-pointer hover:bg-teal-400 hover:text-white transition-colors duration-300">
          <div>
          <p>التأهيل على المواصفة القياسية</p>
          <p>لإدارة التطوع في المنظمات (SASO2923)</p>
          </div>
          <Image 
          className="rounded-lg"
          src={"/images/assets/b6f5f47798b99b8a2b281828203426c3.png"}
          alt="image"
          width={85}
          height={85} />
        </div>
        <div className="bg-[#CFFCFF] p-4 rounded-lg text-end flex flex-row items-center gap-2 justify-end hover:cursor-pointer hover:bg-teal-400 hover:text-white transition-colors duration-300">
          <div>
          <p>تأسيس وحدات ومبادرات المسؤولية المجتمعية</p>
          </div>
          <Image 
          className="rounded-lg"
          src={"/images/assets/b6f5f47798b99b8a2b281828203426c3.png"}
          alt="image"
          width={85}
          height={85} />
        </div>
        <div className="bg-[#CFFCFF] p-4 rounded-lg text-end flex flex-row items-center gap-2 justify-end hover:cursor-pointer hover:bg-teal-400 hover:text-white transition-colors duration-300">
          <div>
          <p>التأهيل على تقارير الاستدامة</p>
          </div>
          <Image 
          className="rounded-lg"
          src={"/images/assets/b6f5f47798b99b8a2b281828203426c3.png"}
          alt="image"
          width={85}
          height={85} />
        </div>
        <div className="bg-[#CFFCFF] p-4 rounded-lg text-end flex flex-row items-center gap-2 justify-end hover:cursor-pointer hover:bg-teal-400 hover:text-white transition-colors duration-300">
          <div>
          <p>الابتكار والتصميم</p>
          </div>
          <Image 
          className="rounded-lg"
          src={"/images/assets/b6f5f47798b99b8a2b281828203426c3.png"}
          alt="image"
          width={85}
          height={85} />
        </div>
        <div className="bg-[#CFFCFF] p-4 rounded-lg text-end flex flex-row items-center gap-2 justify-end hover:cursor-pointer hover:bg-teal-400 hover:text-white transition-colors duration-300">
          <div>
          <p>التأهيل على جوائز التميز</p>
          </div>
          <Image 
          className="rounded-lg"
          src={"/images/assets/b6f5f47798b99b8a2b281828203426c3.png"}
          alt="image"
          width={85}
          height={85} />
        </div>
        </div>
      </section>

{/* <div className="grid grid-cols-2 gap-4">
  <div className="bg-gray-200 p-4">First Div</div>
  <div className="bg-gray-300 p-4">Second Div</div>
</div> */}

    </section>
  );
};

export default page;
