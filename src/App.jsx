import ButtonGradient from "./assets/svg/ButtonGradient";
import Interaction from "./components/Interaction/";
import Marketplace from "./components/Marketplace";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EarlyAccess from "./components/EarlyAccess";
import Integration from "./components/Integration";
import Connection from "./components/Connection";
import Test from "./components/Test";
import Test2 from "./components/test2";
import Test3 from "./components/Test3";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Test3 />
        {/* <Interaction /> */}
        <Marketplace />
        <Connection />
        {/* <Integration /> */}
        {/* <Test /> */}
        <Test2 />
        <EarlyAccess />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
