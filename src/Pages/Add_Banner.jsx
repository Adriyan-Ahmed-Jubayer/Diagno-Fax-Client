import { toast } from "react-toastify";

const Add_Banner = () => {
    const handleAddBanner = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const title = form.Title.value;
        const image = form.image.value;
        const code = form.code.value;
        const coupon_rate = +form.coupon_rate.value;
        const description = form.description.value;
        const banner = {name, title, image, code, description, coupon_rate}
        console.log(banner);
        fetch('http://localhost:5000/banner', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(banner)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Your Banner Added Successfully ')
            }
        })

    }
    return (
        <>
            <section className='pb-20'>
                <div className="">
                    <div className="border-[#8D53FD] border-2 px-5 md:p-10 py-5 text-center rounded-[5px] mx-4 xl:mx-0">
                        <form onSubmit={handleAddBanner} className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Banner Name</span>
                                </label>
                                <input type="text" placeholder="Enter Banner Name ..." className="input input-bordered text-sm md:text-base " name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Banner Title</span>
                                </label>
                                <input type="text" placeholder="Enter Banner Title" name='Title' className="input input-bordered text-sm md:text-base " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Coupon code name</span>
                                </label>
                                <input type="text" placeholder="Enter Coupon Code" className="input input-bordered text-sm md:text-base " name='code' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xs md:text-base font-semibold ">Coupon Rate</span>
                                </label>
                                <input type="text" defaultValue={0} placeholder="Enter Coupon Rate" className="input input-bordered text-sm md:text-base " name='coupon_rate' required />
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
                                <textarea name="description" className="lg:col-span-2 text-[10px] md:text-base lg:text-lg py-2 md:py-4 rounded-lg px-6 border " rows="8" placeholder="Try To Add 80 Character"></textarea>
                            </div>
                            <button className=" lg:col-span-3 bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]   py-3 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">ADD BANNER</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Add_Banner;