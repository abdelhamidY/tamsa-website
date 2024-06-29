import Image from "next/image";
import React from "react";
import contactImg from "@/public/images/contact-us-img.png";
import emailImg from "@/public/icons/email.png";
import landlineImg from "@/public/icons/landline.png";
import phoneImg from "@/public/icons/phone.png";
import ContactForm from "@/components/contactUs/ContactForm";
import ReachUsOn from "@/components/contactUs/ReachUsOn";

const reachUsOnData = [
  {
    id: 1,
    href: "mailto:info@taamsa.com",
    label: "البريد الالكترونى",
    img: emailImg,
    link: "info@taamsa.com",
  },
  {
    id: 2,
    href: "tel:+200112630374",
    label: "الهاتف",
    img: landlineImg,
    link: "0112630374",
  },
  {
    id: 3,
    href: "tel:+0557373629",
    label: "الجوال",
    img: phoneImg,
    link: "0557373629",
  },
];
const Page = () => {
  return (
    <section className="relative xl:after:content[''] my-32 xl:after:w-[25vw] xl:after:h-[110%] xl:after:absolute rtl:after:left-0  ltr:after:right-0 after:rounded-s-2xl after:bottom-0 after:top-[unset] xl:after:top-[-5%] after:bg-[#009DA8]">
      <div className="has-app-max-width px-5">
        <div className="flex flex-col gap-8 xl:flex-row">
          <div className=" flex flex-col gap-7">
            <h2 className="text-3xl">تواصل معنا</h2>
            <p className="text-[#575763]  ">
              نحن هنا لمساعدتك والاستماع إلى استفساراتك واقتراحاتك. لا تتردد في
              الاتصال بنا أو ملء النموذج أدناه، وسنقوم بالرد عليك في أقرب وقت
              ممكن.
            </p>
            <ContactForm />
            <div className="flex xl:pb-0 pb-28 justify-between sm:gap-2 gap-5 sm:flex-row flex-col">
              {reachUsOnData.map((item) => (
                <ReachUsOn
                  key={item.id}
                  href={item.href}
                  img={item.img}
                  label={item.label}
                  link={item.link}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-start items-center xl:after:hidden relative after:content['']  after:w-[50%] after:h-[125%] after:absolute rtl:after:-left-5  ltr:after:-right-5  after:rounded-s-2xl after:-bottom-[15%] after:top-[unset]   after:bg-[#009DA8]  ">
            <Image
              className="relative z-10 w-full object-cover min-h-[70vh] rounded-lg"
              alt=""
              height={600}
              src={contactImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
