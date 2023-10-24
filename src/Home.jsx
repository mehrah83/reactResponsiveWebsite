import ContactUs from "./ContactUs";
import GetStarted from "./GetStarted";
import OurValue from "./OurValue";
import Residencies from "./Residencies";
import Companies from "./components/Companies";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <>
     <HeroSection/> 
     <Companies/>
     <Residencies/>
     <OurValue/>
     <ContactUs/>
     <GetStarted/>
    </>
  )
}

export default Home;
