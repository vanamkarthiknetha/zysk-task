import items from "../data/accordion";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section className="max-w-[90%] md:max-w-[85%] mx-auto  border-b-2 border-b-slate-100">
      <div id="container1" className="pt-24 pb-12 text-center">
        <p className="font-[600] text-4xl pb-5">Frequently asked questions</p>
        <p className="font-[400] text-[#475467] text-xl">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div id="container2" className="md:w-[60%] mx-auto pb-10">
        <Accordion items={items}/>
      </div>
      <div id="container3" className="bg-[#F9FAFB] text-center rounded-xl py-8 mb-24 ">
        <img src="Faq/Avatar group.png" alt="" className="mx-auto"/>
        <div className="py-8">
            <p className="font-semibold text-xl">Still have questions?</p>
            <p className="text-[#475467] font-normal text-lg pt-2">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>
        <button className="text-white hover:bg-purple-700 bg-[#E63F3A] px-4 py-2 rounded-lg">Get in touch</button>
      </div>
    </section>
  );
};

export default Faq;
