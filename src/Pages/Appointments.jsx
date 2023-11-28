import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authenticate";
import { BsPerson } from "react-icons/bs";
import {FaSackDollar} from "react-icons/fa6"
import {AiOutlineCalendar} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
import Swal from 'sweetalert2'
import { toast } from "react-toastify";

const Appointments = () => {
    const {User} = useContext(AuthContext)
    const [appointments, setAppointments] = useState([])
    const userAppointments = () => {
        fetch(`http://localhost:5000/booked?email=${User.email}`)
        .then(res => res.json())
        .then(data => setAppointments(data));
    }
    useEffect(() => {
        userAppointments()
    }, [])
    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booked?id=${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        userAppointments();
                        Swal.fire({
                            title: "Canceled!",
                            text: "Your Booked Test has been deleted.",
                            icon: "success"
                          });
                    }
                    else{
                        toast.error('There is a Problem to Cancel')
                    }
                })
            }
          });
    }
    return (
        <>
            <div className="space-y-6 mx-5 lg:container lg:mx-auto" >
                {
                    appointments.map(appointment => <div key={appointment._id} data-aos="fade-up" className="p-5 border-[#8D53FD] border-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 rounded-lg ">
                    <div className="w-full md:w-[300px] md:h-[170px] lg:navbar-start">
                        <img className="w-full h-[200px] md:w-[300px] md:h-[170px]" src={appointment.image} alt="" />
                    </div>
                    <div className=" text-center md:text-left space-y-2 lg:navbar-center ml-6">
                        <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold">{appointment.name}</h2>
                        <h3 className="text-sm font-bold flex items-center gap-3"><span className="font-medium"><BsPerson></BsPerson></span> {appointment.user_name}</h3>
                        <h3 className="text-sm font-bold flex items-center gap-3"><span className="font-medium"><FaSackDollar></FaSackDollar></span>{appointment.price}</h3>
                        <h3 className="text-sm font-bold flex items-center gap-3"><span className="font-medium"><AiOutlineCalendar></AiOutlineCalendar></span> {appointment.available_date}</h3>
                        <h3 className="text-sm font-bold flex items-center gap-3"><span className="font-medium text-red-500"><ImCross></ImCross> </span> {appointment.valid_data}</h3>
                    </div>
                    <div className="flex flex-row items-center justify-center lg:flex-col gap-10">
                        <button onClick={() => handleCancel(appointment._id)} className=" bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] text-white py-2 md:py-3 px-3 md:px-6 lg:px-9 font-bold text-xs md:text-sm  rounded flex items-center justify-center gap-2">CANCEL</button>
                    </div>
                </div>)
                }
            </div>
        </>
    );
};

export default Appointments;