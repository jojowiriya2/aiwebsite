import ButtonGradient from "./assets/svg/ButtonGradient";
import Interaction from "./components/Interaction/";
import Marketplace from "./components/Marketplace";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EarlyAccess from "./components/EarlyAccess";
import Connection from "./components/Connection";
import Integration from "./components/Integration";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Interaction />
        <Marketplace />
        <Integration />
        <Connection />
        <EarlyAccess />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
