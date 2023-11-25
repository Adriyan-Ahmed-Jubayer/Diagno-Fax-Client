const Search = () => {
    return (
        <>
            <div className="">
                <div className="flex justify-end">
                    <input className="py-2.5 md:py-3 px-10 md:px-8 lg:px-10 rounded-tl-[4px] rounded-bl-[4px] w-3/12 lg:max-w-xs bg-transparent text-xs md:text-sm lg:text-base md:mx-0 border-[#9E6EFD] focus:border-2 border focus:outline-none font-medium" type="date" name="" placeholder="Enter Your Job's Name " required />
                    <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded-tr-[4px] rounded-br-[4px]">SEARCH</button>
                </div>
            </div>
        </>
    );
};

export default Search;