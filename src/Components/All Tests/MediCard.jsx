import { Link } from "react-router-dom";
import { LuDollarSign } from "react-icons/lu";
import { MdMan } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

const MediCard = ({ test }) => {
    const { _id, name, price, description, image, available_slots, available_date } = test;
    return (
        <>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-5 btn-border lg:flex lg:gap-6 border-[#8D53FD] border rounded-md ">
                <div className="lg:flex-1 overflow-hidden">
                    <img className="w-full h-[200px] md:h-[250px] lg:h-full max-h-[240px] hover:scale-125 duration-500" src={image} alt="" />
                </div>
                <div className="lg:flex-1 space-y-2 md:space-y-4 lg:space-y-5 md:mt-2 lg:mt-0">
                    <h1 className="text-sm md:text-xl lg:text-xl font-bold card-title-design inline-block "> {name} </h1>
                    <div className="space-y-2 md:space-y-4 lg:space-y-3">
                        <div className="flex items-center justify-between">
                            <h1 className="text-sm md:text-base lg:text-xl font-bold flex items-center gap-2 "><span className="font-medium"><LuDollarSign></LuDollarSign></span> {price}</h1>
                            <h1 className="text-sm md:text-base lg:text-xl font-bold flex items-center gap-2 "><span className="font-medium"><MdMan></MdMan></span> {available_slots}</h1>
                        </div>
                        <h1 className="text-sm md:text-base lg:text-xl font-bold flex items-center gap-2 "><span className="font-medium"><CiCalendar /></span> {available_date} Days</h1>
                        <div>
                            <p>{description && description.slice(0, 120)} ...</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link to={`/details/${_id}`}>
                            <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MediCard;