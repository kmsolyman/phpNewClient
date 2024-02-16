import FeatureProduct from "../Components/clientes/FeatureProduct";
import HeroSection from "../Components/clientes/HeroSection";
import Services from "../Components/clientes/Services";
import Trusted from "../Components/clientes/Trusted";

const Home = () => {
  const data = {
    name: "thapa store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
