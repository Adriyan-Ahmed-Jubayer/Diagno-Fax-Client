import { useContext } from "react";
import { AuthContext } from "../Context/Authenticate";
import { toast } from "react-toastify";

const Add_Test = () => {
    const {User} = useContext(AuthContext);
    const handleAddTest = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const valid_data = form.valid_data.value;
        const available_slots = form.available_slots.value;
        const description = form.description.value;
        const status = 'pending';
        const poster_name = User?.displayName;
        const poster_email = User?.email;
        const posted_date = new Date().toISOString().slice(0, 10)
        const test = {name, price, valid_data, available_slots, description, status, posted_date, poster_email, poster_name}
        console.log(test);
        fetch('http://localhost:5000/tests', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(test)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Your Test Added Successfully ')
            }
        })

    }
    return (
        <>
            <section className='pb-20'>
                <div className="">
                    <div className="border-[#8D53FD] border-2 px-5 md:p-10 py-5 text-center rounded-[5px] mx-4 xl:mx-0">
                        <form onSubmit={handleAddTest} className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Test Name</span>
                                </label>
                                <input type="text" placeholder="Enter Test Name ..." className="input input-bordered text-sm md:text-base " name='name' required />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Price</span>
                                </label>
                                <input type="text" placeholder="Enter Test Price" name='price' className="input input-bordered text-sm md:text-base " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Date</span>
                                </label>
                                <input type="date" placeholder="Enter Valid Date ..." className="input input-bordered text-sm md:text-base " name='valid_data' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Slots</span>
                                </label>
                                <input type="text" defaultValue={0} placeholder="Enter Your Slots Number ..." className="input input-bordered text-sm md:text-base " name='available_slots' required />
                            </div>
                            <div className="form-control lg:col-span-2">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Image URL</span>
                                </label>
                                <input type="text" placeholder="Enter Banner Image ..." className="input input-bordered text-sm md:text-base " name='image' required />
                            </div>

                            <div className="form-control lg:col-span-3">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold">Test Description</span>
                                </label>
                                <textarea name="description" className="lg:col-span-2 text-[10px] md:text-base lg:text-lg py-2 md:py-4 rounded-lg px-6 border " rows="8" placeholder="Try To Add 400 Character"></textarea>
                            </div>
                            <button className=" lg:col-span-3 bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]   py-3 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">ADD JOB</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Add_Test;