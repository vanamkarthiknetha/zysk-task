
const Cta = () => {
  return (
    <section className="bg-[#F9FAFB]">
       <div className=" max-w-[90%] md:max-w-[85%] mx-auto text-center md:px-20 py-16 md:py-28">
            <div className="flex flex-col gap-6">
                <p className="font-[600] text-4xl">Start your free trial</p>
                <p className="text-[#475467] text-xl font-[400]">Join over 4,000+ startups already growing with Untitled.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-3 mt-10">
                <button className=" border-2 rounded-lg py-2 px-4 gap-2 font-semibold">Learn more</button>
                <button className="text-white hover:bg-purple-700 bg-[#E63F3A] px-4 py-2 rounded-lg">Get started</button>
            </div>
       </div>
    </section>
  )
}

export default Cta
