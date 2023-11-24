const Section_Heading = ({Sub_Title, Title, Description}) => {
    return (
        <>
            <div className="text-center md:w-6/12 mx-auto lg:w-6/12 xl:w-4/12 space-y-2 md:space-y-3 ">
                <h5 className="text-xs md:text-sm lg:text-base font-extrabold inter text-design">{Sub_Title}</h5>
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold inter">{Title}</h1>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium roboto text-gray-600">{Description}</p>
            </div>
        </> 
    );
};
export default Section_Heading;