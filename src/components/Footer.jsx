import links from "../data/footer";
const Footer = () => {
  return (
    <section className="max-w-[90%] md:max-w-[85%] mx-auto">
      <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-6 py-16">
        {links.map((ele) => {
          return (
            <div className="" key={ele.tag}>
              <p className="font-semibold text-[#667085] text-sm py-2">
                {ele.tag}
              </p>
              <div className="">
                {ele.subtags.map((subtag) => {
                  return (
                    <div className="flex gap-2" key={subtag}>
                      <p className="text-[#475467] font-semibold py-1.5 focus:text-[#475467]/50 blink-text">
                        {subtag}
                      </p>
                      {subtag === "Solutions" && (
                        <div className="flex items-center">
                        <p className=" rounded-full px-2 py-0.5 border border-[#ABEFC6] bg-[#ECFDF3] text-[#067647] font-[500] text-xs">
                          New
                        </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 pt-8 border-t-2 border-b-slate-100 gap-6 md:gap-0">
        <img src="Navbar/Group 160.png" alt="" className="h-9" />
        <p className="text-[#667085] ">
          © 2077 zysktechnologies. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
