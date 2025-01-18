const HeadingBadge = () => {
  return (
    <div id="headingBadge" className="flex flex-col mx-auto items-center">
      <div
        id="badge"
        className="flex justify-around py-1 px-1 md:px-0 rounded-full  border border-[#E9D7FE] bg-[#F9F5FF] md:border-[#E63F3A]/30 md:bg-[#E63F3A]/[.03] w-full md:w-[80%] xl:w-[50%]"
      >
        <div className="flex rounded-full border border-[#D6BBFB] md:border-[#e6403ab0] bg-white  w-[30%] md:w-[28%] ">
          <p className="text-[#E63F3A] font-[500] text-md mx-auto">New feature</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#E63F3A] font-[500] text-md text-center">Check out the team dashboard</p>
          <img src="Arrow right.png" alt="" className="hidden md:flex h-3" />
          <img src="mobile-Arrow right.png" alt="" className="flex md:hidden h-3" />
        </div>
      </div>
      <p className="text-[#101828] font-[600] text-[2.8rem] leading-[50px] md:leading-none md:text-[3.125rem] pt-6  text-center ">
        Beautiful analytics to grow smarter
      </p>
    </div>
  );
};

export default HeadingBadge;
