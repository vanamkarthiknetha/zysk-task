const Navbar = () => {
  return (
    <div className="bottom-0.5 h-20 flex justify-center items-center border-b-2 border-b-slate-100">
      <div id="container" className="grow flex  justify-between max-w-[90%] md:max-w-[85%] mx-auto">
        <div id="content" className="flex gap-10 text-lg">
          <img src="Navbar/Group 160.png" alt="" className=" h-9" />
          <ul id="navigation" className="hidden md:flex items-center ">
            <a href="#" className="text-[#475467] font-semibold  mr-4  hover:text-slate-800"><p >Home</p></a>
            <a href="#" className="text-[#475467] font-semibold   mx-4 hover:text-slate-800 ">
              <div className="flex items-center gap-3">
                <p >Products</p>
                <img src="Navbar/Arrow down.png" alt="" className="h-2 w-3 mt-1"/>
              </div>
            </a>
            <a href="#" className="text-[#475467] font-semibold   mx-4 hover:text-slate-800 ">
              <div className="flex items-center gap-3">
                <p >Resources</p>
                <img src="Navbar/Arrow down.png" alt="" className="h-2 w-3 mt-1"/>
              </div>
            </a>
            <a href="#" className="text-[#475467] font-semibold  ml-4  hover:text-slate-800"><p >Pricing</p></a>
          </ul>
        </div>
        <div id="dropdown" className="hidden md:flex cursor-pointer ">
            <img src="Navbar/Dropdown.png" alt="" className="h-10 w-10"/>
        </div>
        <div id="dropdown" className="flex md:hidden cursor-pointer ">
            <img src="Navbar/menu-01.png" alt="" className="h-10 w-10"/>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
