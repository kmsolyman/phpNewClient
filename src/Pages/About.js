import HeroSection from "../Components/clientes/HeroSection";
import { useProductContext } from "../context/productcontex";

const About = () => {
  // const { myName } = useProductContext();

  const data = {
    name: "MIM Ecommerce",
  };

  return (
    <>
      {/* {myName} */}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
