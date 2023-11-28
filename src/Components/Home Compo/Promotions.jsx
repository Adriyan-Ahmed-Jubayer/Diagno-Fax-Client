import Section_Heading from "../../Shared/Section Heading/Section_Heading";

const Promotions = () => {
    return (
        <>
            <div className="container mx-auto space-y-6 md:space-y-20 roboto">
                <Section_Heading Sub_Title={`PROMOTIONS`} Title={`Health Checkup Bonanza!`} Description={`-Discover a World of Wellness with Our Exclusive Promotions! 🌟 Dive into a realm of preventive healthcare with unbeatable offers on comprehensive diagnostic packages. `}></Section_Heading>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=" flex-1 lg:flex-[3] grid grid-cols-1 md:grid-cols-2 gap-5 mx-4 lg:mx-0">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-7  rounded-xl text-[#8D53FD] border-[#8D53FD] border-2 space-y-2">
                        <img src="https://img.freepik.com/free-vector/flat-world-health-day-celebration-illustration_23-2148885957.jpg?w=740&t=st=1701129866~exp=1701130466~hmac=0c1cc795645b35c43b31d275f1107b8a9dfe652fc0a55eee7b84d366e0859d5f" className=" h-12 w-12" alt="" />
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Job Opportunities</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 text-gray-500">We provide our customers with access to a vast and diverse range of job opportunities across various industries and sectors.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-7  rounded-xl text-[#8D53FD] border-[#8D53FD] border-2 space-y-2">
                        <img src="https://img.freepik.com/free-psd/gradient-arrows-design_23-2150390307.jpg?w=740&t=st=1701130166~exp=1701130766~hmac=38d1527766fc1449b9efe682ce80be583ecf0f3b32f4e9a05f7cfa5c6d6d9577" className=" h-12 w-12" alt="" />
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Search and Filtering</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 text-gray-500">Our powerful search and filtering options allow users to refine their job searches based on specific criteria such as location</p>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-7  rounded-xl text-[#8D53FD] border-[#8D53FD] border-2 space-y-2">
                        <img src="https://img.freepik.com/free-vector/flat-world-health-day-celebration-illustration_23-2148885957.jpg?w=740&t=st=1701129866~exp=1701130466~hmac=0c1cc795645b35c43b31d275f1107b8a9dfe652fc0a55eee7b84d366e0859d5f" className=" h-12 w-12" alt="" />
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Resources and Advice</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 text-gray-500">Resources and Advice In addition to job listings, we offer a wealth of career resources and advice. Our blog, articles, and guides cover a wide.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-7  rounded-xl text-[#8D53FD] border-[#8D53FD] border-2 space-y-2">
                        <img src="https://i.ibb.co/9rhCncx/flat-hotel-booking-concept-background-23-2148193794-removebg-preview.png" className=" h-12 w-12" alt="" />
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Trust and Reliability</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 text-gray-500">We have established a reputation for trust and reliability in the industry. Our commitment to quality job listings, data security.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Promotions;