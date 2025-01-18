import HeadingBadge from "./HeadingBadge";
import Navbar from "./Navbar";

const HeroHeaderSection = () => {
  return (
    <div>
      <Navbar />
      <section className=" flex flex-col items-center max-w-[90%] md:max-w-[85%] mx-auto mb-2">
        <div id="container1" className=" pt-20 pb-14 w-full">
          <div id="content" className="flex flex-col w-full md:w-[70%] mx-auto">
            <HeadingBadge/>
            <div
              id="supporttext"
              className="flex mx-auto pt-6 text-center w-[80%]"
            >
              <p className="text-[#475467] text-xl font-[400] text-center ">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>
          </div>
          <div
            id="actions"
            className="flex flex-col-reverse md:flex-row gap-5 justify-center pt-10"
          >
            <button className="flex justify-center items-center border-2 rounded-full py-2 px-4 gap-2 font-semibold">
              <img src="play-circle.png" alt="" className="h-4" />
              <p className="">Demo</p>
            </button>
            <button className="rounded-full py-3 px-5 text-white hover:bg-purple-700 bg-[#E63F3A] font-semibold">
              Sign up
            </button>
          </div>
        </div>
        <div id="container2" className="w-full pb-10">
          <img
            src="hero-image 1.png"
            id="container"
            className="hidden md:flex w-full h-[38rem] rounded-3xl border-8  border-black"
          />
          <img
            src="hero-image 2.png"
            id="container"
            className="flex md:hidden w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroHeaderSection;
