import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authenticate";
import { LuClipboardEdit } from "react-icons/lu";
import { useForm } from 'react-hook-form';
import usePublicApi from "../Hooks/usePublicApi";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Profile = () => {
    const { register, handleSubmit, reset } = useForm();
    const { User } = useContext(AuthContext);
    const [user, setUser] = useState({})
    const [District, setDistrict] = useState([])
    const [Upzila, setUpzila] = useState([])
    const PublicKey = usePublicApi();
    const bringUser = () => {
        fetch(`http://localhost:5000/single/user?email=${User.email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }
    useEffect(() => {
        bringUser();
        fetch('http://localhost:5000/districts')
            .then(res => res.json())
            .then(data => setDistrict(data))
        fetch('http://localhost:5000/upozilas')
            .then(res => res.json())
            .then(data => setUpzila(data))
    }, [])
    const [show, setShow] = useState(true)
    const handleUpdate = async (data) => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then(async(result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const file = { image: data.image[0] };
                const res = await PublicKey.post(imageHostingApi, file, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
                if (res.data.success) {
                    const userData = {
                        name: data.name,
                        email: data.email,
                        pass: data.pass,
                        blood_group: data.blood_grp,
                        district: data.district,
                        upozila: data.upozila,
                        image: res.data.data.display_url
                    }
                    fetch(`http://localhost:5000/user?id=${user._id}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                Swal.fire("Saved!", "", "success");
                                bringUser()
                                reset()
                                setShow(!show)
                            }
                        })
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });



    }
    return (
        <>
            <div className="p-5 rounded-lg border-[#8D53FD] border-2 space-y-6 container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="inter text-xl md:text-2xl font-bold ">MY PROFILE</h1>
                    <button onClick={() => {
                        setShow(!show)
                    }} className=" bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] text-white py-3 px-6 lg:px-9 font-bold text-xs md:text-sm  rounded flex items-center justify-center inter gap-2">{show ? <><LuClipboardEdit></LuClipboardEdit> EDIT</> : <>DISCARD</>}</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 roboto">
                    <div className="w-32 h-32 md:w-52 md:h-52 mx-auto">
                        <img className="rounded-full w-full h-full" src={user.image} alt="" />
                    </div>
                    {show ? <>
                        <div className="space-y-3">
                            <div>
                                <label className="py-1">
                                    <span className="label-text">Username</span>
                                </label>
                                <h1 className="md:text-lg font-bold">{user.name}</h1>
                            </div>
                            <div>
                                <label className="py-1">
                                    <span className="label-text">E-mail</span>
                                </label>
                                <h1 className="md:text-lg font-bold">{user.email}</h1>
                            </div>
                            <div>
                                <label className="py-1">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <h1 className="md:text-lg font-bold">{user.blood_group}</h1>
                            </div>
                            <div>
                                <label className="py-1">
                                    <span className="label-text">District</span>
                                </label>
                                <h1 className="md:text-lg font-bold">{user.district}</h1>
                            </div>
                            <div>
                                <label className="py-1">
                                    <span className="label-text">Sub District</span>
                                </label>
                                <h1 className="md:text-lg font-bold">{user.upozila}</h1>
                            </div>
                        </div>
                    </>
                        :
                        <>
                            <form className="inter" onSubmit={handleSubmit(handleUpdate)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Name</span>
                                    </label>
                                    <input type="text" {...register('name', { required: true })} placeholder="Enter Your Name" className="input input-bordered" required defaultValue={user.name} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Photo</span>
                                    </label>
                                    <input type="file" {...register('image', { required: true })} placeholder="Enter Your Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Blood Group</span>
                                    </label>
                                    <select {...register('blood_grp', { required: true })} defaultValue={user.blood_group} className="input input-bordered">
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">District</span>
                                    </label>
                                    <select {...register('district', { required: true })} defaultValue={user.district} className="input input-bordered" required>
                                        {
                                            District?.map(item => <option key={item.id} value={item.name}>{item.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Upzila</span>
                                    </label>
                                    <select {...register('upozila', { required: true })} defaultValue={user.upozila} className="input input-bordered" required>
                                        {
                                            Upzila?.map(item => <option key={item.id} value={item.name}>{item.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input type="email" {...register('email', { required: true })} placeholder="Enter Your E-mail" className="input input-bordered" required defaultValue={user.email} />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">SAVE CHANGES</button>
                                </div>
                            </form>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Profile;