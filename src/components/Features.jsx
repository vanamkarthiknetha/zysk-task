
const Features = () => {
  return (
    <section className="flex flex-col max-w-[90%] md:max-w-[85%] mx-auto">
        <div id="container1">
            <div className="flex flex-col mx-auto text-center font-[600]" id="top">
                <p className="text-[#E63F3A] ">Features</p>
                <p className="text-[#101828] text-3xl md:text-4xl pt-5">Analytics that feels like it’s from the future</p>
            </div>
            <p className="text-[#475467] font-[400] text-xl mx-auto md:w-[58%] text-center pt-5">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div id="container2" className="grid md:grid-cols-3 gap-10 mt-10 md:gap-16 md:mt-16 pb-20 md:pb-24">
            <div className="">
                <img src="Features/Featured icon.png" alt="" className="h-12 mx-auto mb-4"/>
                <div className="text-center">
                    <p className="text-[#101828] font-[600] text-xl pb-2">Share team inboxes</p>
                    <p className="text-[#475467] font-[400]">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
            </div>
            <div className="">
                <img src="Features/Featured icon (1).png" alt="" className="h-12 mx-auto mb-4"/>
                <div className="text-center">
                    <p className="text-[#101828] font-[600] text-xl pb-2">Deliver instant answers</p>
                    <p className="text-[#475467] font-[400]">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                </div>
            </div>
            <div className="">
                <img src="Features/Featured icon (2).png" alt="" className="h-12 mx-auto mb-4"/>
                <div className="text-center">
                    <p className="text-[#101828] font-[600] text-xl pb-2">Manage your team with reports</p>
                    <p className="text-[#475467] font-[400]">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                </div>
            </div>
            <div className="">
                <img src="Features/Featured icon (3).png" alt="" className="h-12 mx-auto mb-4"/>
                <div className="text-center">
                    <p className="text-[#101828] font-[600] text-xl pb-2">Connect with customers</p>
                    <p className="text-[#475467] font-[400]">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
                </div>
            </div>
            <div className="">
                <img src="Features/Featured icon (4).png" alt="" className="h-12 mx-auto mb-4"/>
                <div className="text-center">
                    <p className="text-[#101828] font-[600] text-xl pb-2">Connect the tools you already use</p>
                    <p className="text-[#475467] font-[400]">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
                </div>
            </div>
            <div className="">
                <img src="Features/Featured icon (5).png" alt="" className="h-12 mx-auto mb-4"/>
                <div className="text-center">
                    <p className="text-[#101828] font-[600] text-xl pb-2">Our people make the difference</p>
                    <p className="text-[#475467] font-[400]">We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Features
