import { BsPerson } from "react-icons/bs";
import {FaSackDollar} from "react-icons/fa6"
import {AiOutlineCalendar} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';

const Appointment_Card = ({appointment}) => {
    const { _id, image, name, price, available_date, valid_data, user_name } = appointment;
    return (
        <>
            <div data-aos="fade-up" className="p-5 border-[#8D53FD] border-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 rounded-lg ">
                <div className="w-full md:w-[300px] md:h-[170px] lg:navbar-start">
                    <img className="w-full h-[200px] md:w-[300px] md:h-[170px]" src={image} alt="" />
                </div>
                <div className=" text-center md:text-left space-y-2 lg:navbar-center ml-6">
                    <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold">{name}</h2>
                    <h3 className="text-sm font-bold flex items-center gap-3"><span className="font-medium"><BsPerson></BsPerson></span> {user_name}</h3>
                    <h3 className="text-sm font-bold flex items-center gap-3"><span className="font-medium"><FaSackDollar></FaSackDollar></span>{price}</h3>
                    <h3 className="text-sm font-bold flex items-center gap-3"><span className="font-medium"><AiOutlineCalendar></AiOutlineCalendar></span> {available_date}</h3>
                    <h3 className="text-sm font-bold flex items-center gap-3"><span className="font-medium text-red-500"><ImCross></ImCross> </span> {valid_data}</h3>
                </div>
                <div className="flex flex-row items-center justify-center lg:flex-col gap-10">
                    <button className=" bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] text-white py-2 md:py-3 px-3 md:px-6 lg:px-9 font-bold text-xs md:text-sm  rounded flex items-center justify-center gap-2">CANCEL</button>
                </div>
            </div>
        </>
    );
};

export default Appointment_Card;