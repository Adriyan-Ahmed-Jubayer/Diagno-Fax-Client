import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authenticate";
import Swal from "sweetalert2";
import { Circles } from "react-loader-spinner";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";



const All_Test = () => {
    const [Tests, setTests] = useState([]);
    const [Loader, setLoader] = useState(true);
    const AllTests = () => {
        fetch('http://localhost:5000/tests')
            .then(res => res.json())
            .then(data => setTests(data))
    }
    const checkingData = () => {
        if(Tests.length > 0){
            return 'active'
        } 
    }
    const fullProccess = async () => {
        await AllTests();
        await setLoader(false)
        await checkingData()
    }
    useEffect(() => {
        fullProccess()
    }, [])


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin "
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/test?id=${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Admin Maked",
                                text: "Successfully Admin made",
                                icon: "success"
                            });
                            AllTests();
                        }
                    })
            }
        });
    }
    return (
        <>
            <section className="md:mx-6 h-full">
                <div className=" font-bold inter">
                    {
                        Tests.length > 0 && <>
                            <ul className="grid grid-cols-5 place-items-center text-[12px] py-4 bg-[#E6E6E6]  rounded-tr-lg rounded-tl-lg">
                                <li>Name</li>
                                <li>Price</li>
                                <li>Slots</li>
                                <li>Update</li>
                                <li>Delete</li>
                            </ul>
                            <div>
                                {
                                    Tests.map(test => {
                                        return <ul key={test._id} className="grid grid-cols-5 place-items-center text-[12px] py-4 border inter">
                                            <li>{test?.name}</li>
                                            <li>{test?.price}</li>
                                            <li>{test?.available_slots}</li>
                                            
                                            <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-lg  rounded"><LiaEdit /></button>
                                            <button onClick={() => handleDelete(test._id)} className="bg-red-500  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-lg   rounded"><RiDeleteBin6Line /></button>
                                        </ul>
                                    })
                                }
                            </div></>
                    }
                    {
                       Loader &&  <>
                         <div className="flex justify-center text-purple-600 items-center min-h-screen">
                             <Circles
                                 height="80"
                                 width="80"
                                 color="#8D53FD"
                                 ariaLabel="circles-loading"
                                 wrapperStyle={{}}
                                 wrapperClass=""
                                 visible={true}
                             />
                         </div>
                     </>
                    }
                    {
                       checkingData === 'active' &&  <>
                         <div className="min-h-screen flex items-center justify-center">
                            <img className="w-full" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1701354390~exp=1701354990~hmac=5263f5d73df59f688e7387b50f1cb6be152a557095af1b1059006ab3ea499621" alt="" />
                        </div>
                     </>
                    }
                </div>
            </section>
        </>
    );
};

export default All_Test;