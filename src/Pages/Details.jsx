import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LuDollarSign } from "react-icons/lu";

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const Test = () => {
        axios.get(`http://localhost:5000/tests/${id}`)
            .then(res => setData(res.data))
            .catch(err => toast.error(err?.message ? err.message : err))
    }
    useEffect(() => {
        Test();
    }, [])
    const { name, price, description, image, available_slots, available_date } = data;
    console.log(data);
    return (
        <>
            <div className="flex-1 border border-teal-500 p-5 rounded space-y-5 container mx-auto">
                <div>
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-3">
                        <h1 className="text-sm md:text-lg lg:text-2xl xl:text-4xl inter font-bold ">{name}</h1>
                    </div>
                    <div>
                        <h3 className="text-sm md:text-base lg:text-2xl font-medium "> Available Date: <span className="font-bold">{available_date}</span> </h3>
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-sm md:text-base lg:text-lg font-bold"></h1>
                    <p className="text-[12px] leading-6 text-[#64666C] md:text-[14px] md:leading-8 lg:text-[16px] lg:leading-9">{description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <LuDollarSign className="font-bold text-3xl"></LuDollarSign>
                        <h1 className="text-sm md:text-base lg:text-lg font-bold ">{price}</h1>
                    </div>
                    <div>
                        <h1 className="text-sm md:text-base lg:text-lg font-bold ">{available_slots}</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">BOOK</button>
                </div>
            </div>
        </>
    );
};

export default Details;