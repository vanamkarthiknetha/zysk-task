import "./App.css";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroHeaderSection from "./components/HeroHeaderSection";
import SocialProof from "./components/SocialProof";
import Testimonal from "./components/Testimonal";

function App() {
  return (
    <>
      {/* max-w-[90%] md:max-w-[85%] mx-auto*/}
      <main className="inter text-[#101828]">
        <HeroHeaderSection />
        <SocialProof/>
        <Features/>
        <Testimonal/>
        <Faq/>
        <Blog/>
        <Cta/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
