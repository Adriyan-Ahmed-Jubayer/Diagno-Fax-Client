import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authenticate";
import Swal from "sweetalert2";

const Users = () => {
    const [users, setUsers] = useState([])
    const { User } = useContext(AuthContext);
    const [modalData, setModalData] = useState({})
    const AllUsers = () => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }
    useEffect(() => {
        AllUsers();
    }, [AllUsers()])
    const qualifiedUsers = users.filter(user => User?.email !== user.email);

    const handleMakeAdmin = (id) => {
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
                fetch(`http://localhost:5000/admin/users?id=${id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({})
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Admin Maked",
                                text: "Successfully Admin made",
                                icon: "success"
                            });
                            AllUsers();
                        }
                    })
            }
        });
    }
    return (
        <>
            <section className="md:mx-6">
                <div className=" font-bold inter">
                    {
                        qualifiedUsers.length > 0 && <>
                            <ul className="grid grid-cols-6 place-items-center text-[12px] py-4 bg-[#E6E6E6]  rounded-tr-lg rounded-tl-lg">
                                <li>Picture</li>
                                <li>Name</li>
                                <li>Email</li>
                                <li>Status</li>
                                <li>Role</li>
                                <li>Info</li>
                            </ul>
                            <div>
                                {
                                    qualifiedUsers.map(user => {
                                        return <ul key={user._id} className="grid grid-cols-6 place-items-center text-[12px] py-4 border inter">
                                            <li className="w-10 h-10">
                                                <img className="w-full h-full rounded-full" src={user?.image} alt="" />
                                            </li>
                                            <li>{user?.name}</li>
                                            <li>{user?.email}</li>
                                            <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">{user?.status === 'active' ? <>BLOCK</> : <>ACTIVE</>}</button>
                                            {
                                                user.role === 'user' ? <button onClick={() => handleMakeAdmin(user._id)} className="border-[#8D53FD] border-2  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-[#8D53FD] font-bold text-xs md:text-sm  rounded">MAKE ADMIN</button> :
                                                    <li>ADMIN</li>
                                            }
                                            <button onClick={() => {
                                                document.getElementById('my_modal_5').showModal()
                                                setModalData(user)
                                            }} className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">SEE INFO</button>
                                        </ul>
                                    })
                                }
                            </div></>
                    }
                </div>
            </section>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <div className="w-20 h-20 mx-auto">
                            <img className="w-full h-full rounded-full " src={modalData.image} alt="" />
                        </div>
                        <div className="flex justify-between">
                            <div className="">
                                <div>
                                    <label className="py-1">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <h1 className="md:text-lg font-bold">{modalData.name}</h1>
                                </div>
                                <div>
                                    <label className="py-1">
                                        <span className="label-text">E-mail</span>
                                    </label>
                                    <h1 className="md:text-lg font-bold">{modalData.email}</h1>
                                </div>
                                <div>
                                    <label className="py-1">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <h1 className="md:text-lg font-bold">{modalData.blood_group}</h1>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="py-1">
                                        <span className="label-text">District</span>
                                    </label>
                                    <h1 className="md:text-lg font-bold">{modalData.district}</h1>
                                </div>
                                <div>
                                    <label className="py-1">
                                        <span className="label-text">Sub District</span>
                                    </label>
                                    <h1 className="md:text-lg font-bold">{modalData.upozila}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog" className="mx-auto">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="border-[#8D53FD] border-2  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-[#8D53FD] font-bold text-xs md:text-sm  rounded">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Users;