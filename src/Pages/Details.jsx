import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LuDollarSign } from "react-icons/lu";
import { MdMan } from "react-icons/md";
import { AuthContext } from "../Context/Authenticate";

const Details = () => {
    const {User} = useContext(AuthContext);
    const { id } = useParams();
    const [data, setData] = useState({});
    const [userData, setUserData] = useState({});
    const Test = () => {
        axios.get(`http://localhost:5000/tests/${id}`)
            .then(res => setData(res.data))
            .catch(err => toast.error(err?.message ? err.message : err))
    }
    const bringUser = () => {
        axios.get(`http://localhost:5000/singel/users?email=${User.email}`)
            .then(res => setUserData(res.data))
            .catch(err => toast.error(err?.message ? err.message : err))
    }
    useEffect(() => {
        Test();
        bringUser()
    }, [])
    const { _id, name, price, description, image, available_slots, available_date } = data;


    const handleBook = () => {
        if(available_slots == 0 || available_date < 0){
            toast.info('Sorry ! Slots Unavailable')
            return
        }
        if(userData.status === 'blocked'){
            toast.error('Sorry! You are Blocked')
            return;
        }
        const report = 'pending';
        const email = User.email;
        const user_name = User.displayName;
        const booking_date = new Date().toISOString().slice(0, 10)
        const bookedTest = {...data, report, email, user_name, booking_date}
        delete bookedTest._id
        console.log(bookedTest);
        fetch('http://localhost:5000/booked', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedTest)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data.insertedId){
                fetch(`http://localhost:5000/booked?id=${_id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({$inc: {available_slots: -1 }})
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data){
                            toast.success('Your Test Booked Successfully')
                            Test()
                        }
                    })
            }
        })
    }
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
                    <div className="flex items-center justify-between">
                        <MdMan  className="font-bold text-3xl"></MdMan>
                        <h1 className="text-sm md:text-base lg:text-lg font-bold ">{available_slots}</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={handleBook} className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">BOOK NOW</button>
                </div>
            </div>
        </>
    );
};

export default Details;