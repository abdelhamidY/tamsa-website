import Clients from "@/components/home/Clients/Clients";
import CompanyInfo from "@/components/home/CompanyInfo/CompanyInfo";
import OurServices from "@/components/home/OurServices/OurServices";
import Statics from "@/components/home/Statics/Statics";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import HeaderPage from "@/components/shared/HeaderPage/HeaderPage";

export default function Home() {
  return (
    <main className="has-app-max-width">
      <HeaderPage title="Home" image="/images/headerImage.png" />
      <CompanyInfo description="" image="" title="" />
      <OurServices /> 
      <Statics/>
      <Clients/>
      <Testimonials/>
     
    </main>
  );
}
