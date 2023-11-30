import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div className="overflow-hidden py-8 md:py-28 relative bg-no-repeat bg-cover" >
                <div className="flex items-center md:gap-9 lg:gap-0 lg:justify-between mb-5 container mx-auto ">
                    <div className=" flex-[3] space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-8 ml-3 roboto">
                        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold lg:w-8/12 inter ">Streamlining <span className="text-design"> Healthcare</span> Excellence</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium relative text-gray-600 lg:w-8/12">Empower your diagnostics with our state-of-the-art Management System. Enhance efficiency, accuracy, and patient care seamlessly.</p>
                        <div className="flex items-center gap-4">
                            <button className="border-[#8D53FD] border-2  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-[#8D53FD] font-bold text-xs md:text-sm  rounded inter cursor-default">CODE 200</button>
                            <h3 className="text-sm md:text-lg text-design font-bold inter">20%</h3>
                            <Link to="/all-tests" >
                                <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2.5 md:py-3.5 px-5 md:px-7 lg:px-9 text-white font-bold text-xs md:text-sm  rounded" >ALL TESTS</button>
                            </Link>
                        </div>
                    </div>
                    <div className=" flex-[2] relative">
                        <img className="mx-auto relative z-10" src="https://i.ibb.co/dtdQNfh/nurse-concept-illustration-114360-14948-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;