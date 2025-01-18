const Blog = () => {
  return (
    <section className="max-w-[90%] md:max-w-[85%] mx-auto">
        <div id="container1" className="flex justify-between py-14 md:py-20">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                <p className="font-[600] text-[#E63F3A]">Our blog</p>
                <p className="font-[600] text-4xl">Lastest blog posts</p>
                </div>
                <p className="font-normal text-[#475467] text-xl">Tool and strategies modern teams need to help their companies grow.</p>
            </div>
            <div className="">
                <button className="hidden md:block text-white hover:bg-purple-700 bg-[#E63F3A] px-4 py-2 rounded-lg">View all posts</button>
            </div>
        </div>
        <div id="container2" className="grid md:grid-cols-3 gap-12 md:gap-10 pb-20">
            <div className="">
                <img src="Blog/Image.png" alt="" className="w-full"/>
                <div className="">
                    <div className="">
                        <p className="font-semibold text-sm py-3 text-[#E63F3A]">Design</p>
                        <div className="">
                            <div className="flex justify-between">
                                <p className="font-semibold text-2xl">UX review presentations</p>
                                <div className="flex items-center">
                                <img src="Blog/Icon.png" alt="" />
                                </div>
                            </div>
                            <p className="font-normal text-[#475467] py-2">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <div className="">
                        <img src="Blog/Avatar.png" alt="" />
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-[#344054]">Olivia Rhye</p>
                            <p className="font-normal text-[#475467]">20 Jan 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <img src="Blog/Image (1).png" alt="" className="w-full"/>
                <div className="">
                    <div className="">
                        <p className="font-semibold text-sm py-3 text-[#E63F3A]">Product</p>
                        <div className="">
                            <div className="flex justify-between">
                                <p className="font-semibold text-2xl">Migrating to Linear 101</p>
                                <div className="flex items-center">
                                <img src="Blog/Icon.png" alt="" />
                                </div>
                            </div>
                            <p className="font-normal text-[#475467] py-2">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <div className="">
                        <img src="Blog/Avatar (1).png" alt="" />
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-[#344054]">Phoenix Baker</p>
                            <p className="font-normal text-[#475467]">19 Jan 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <img src="Blog/Image (2).png" alt="" className="w-full"/>
                <div className="">
                    <div className="">
                        <p className="font-semibold text-sm py-3 text-[#E63F3A]">Software Engineering</p>
                        <div className="">
                            <div className="flex justify-between">
                                <p className="font-semibold text-2xl">Building your API stack</p>
                                <div className="flex items-center">
                                <img src="Blog/Icon.png" alt="" />
                                </div>
                            </div>
                            <p className="font-normal text-[#475467] py-2">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <div className="">
                        <img src="Blog/Avatar (2).png" alt="" />
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-[#344054]">Lana Steiner</p>
                            <p className="font-normal text-[#475467]">18 Jan 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        <button className=" md:hidden text-white hover:bg-purple-700 bg-[#E63F3A] px-4 py-2 rounded-lg w-full">View all posts</button>
        </div>
    </section>
  )
}

export default Blog
