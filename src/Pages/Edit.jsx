import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authenticate";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";


const Edit = () => {
    const {id} = useParams();
    const [test, setTest] = useState({})
    const bringTest = () => {
        fetch(`http://localhost:5000/tests/${id}`)
        .then(res => res.json())
        .then(data => setTest(data))
    }
    useEffect(() => {
        bringTest()
    },[])
    const {User} = useContext(AuthContext);
    const handleEditTest = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const valid_data = form.valid_data.value;
        const available_slots = +form.available_slots.value;
        const description = form.description.value;
        const status = 'pending';
        const poster_name = User?.displayName;
        const poster_email = User?.email;
        const posted_date = new Date().toISOString().slice(0, 10)
        const test = {name, price, image, valid_data, available_slots, description, status, posted_date, poster_email, poster_name}
        fetch(`http://localhost:5000/test?id=${id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(test)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Your Test Edited Successfully ')
                bringTest()
            }
        })

    }
    return (
        <>
            <section className='pb-20'>
                <div className="">
                    <div className="border-[#8D53FD] border-2 px-5 md:p-10 py-5 text-center rounded-[5px] mx-4 xl:mx-0">
                        <form onSubmit={handleEditTest} className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Test Name</span>
                                </label>
                                <input defaultValue={test.name} type="text" placeholder="Enter Test Name ..." className="input input-bordered text-sm md:text-base " name='name' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Price</span>
                                </label>
                                <input defaultValue={test.price} type="text" placeholder="Enter Test Price" name='price' className="input input-bordered text-sm md:text-base " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Date</span>
                                </label>
                                <input defaultValue={test.valid_data} type="date" placeholder="Enter Valid Date ..." className="input input-bordered text-sm md:text-base " name='valid_data' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Slots</span>
                                </label>
                                <input type="text" defaultValue={test.available_slots} placeholder="Enter Your Slots Number ..." className="input input-bordered text-sm md:text-base " name='available_slots' required />
                            </div>
                            <div className="form-control lg:col-span-2">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Image URL</span>
                                </label>
                                <input defaultValue={test.image} type="text" placeholder="Enter Banner Image ..." className="input input-bordered text-sm md:text-base " name='image' required />
                            </div>

                            <div className="form-control lg:col-span-3">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold">Test Description</span>
                                </label>
                                <textarea defaultValue={test.description} name="description" className="lg:col-span-2 text-[10px] md:text-base lg:text-lg py-2 md:py-4 rounded-lg px-6 border " rows="8" placeholder="Try To Add 400 Character"></textarea>
                            </div>
                            <button className=" lg:col-span-3 bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]   py-3 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">SAVE CHANCES</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Edit;