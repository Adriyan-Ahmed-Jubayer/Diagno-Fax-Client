const Banner = () => {
    return (
        <>
            <div className="bg-[#8D53FD] overflow-hidden py-8 md:py-16 relative">
                <div className="flex items-center md:gap-9 lg:gap-0 lg:justify-between mb-5 container mx-auto ">
                    <div className="absolute h-[200px] md:h-[600px] w-20 md:w-40 top-0 rounded-full bg-[#9E6EFD] transform rotate-45"></div>
                    <div className=" flex-[3] space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-8 ml-3 lg:w-[20%] roboto text-white">
                        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold relative ">Streamlining Healthcare Excellence</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium relative text-gray-200">Empower your diagnostics with our state-of-the-art Management System. Enhance efficiency, accuracy, and patient care seamlessly.</p>
                    </div>
                    <div className=" flex-[2] relative">
                        <img className="mx-auto relative z-10" src="https://i.ibb.co/dtdQNfh/nurse-concept-illustration-114360-14948-removebg-preview.png" alt="" />
                    </div>
                    <div className="absolute h-[200px] md:h-[600px] w-20 md:w-40 -bottom-20 right-20 rounded-full bg-[#9E6EFD] transform rotate-45"></div>
                </div>
            </div>
        </>
    );
};

export default Banner;