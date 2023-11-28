import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authenticate";
import { toast } from "react-toastify";
import usePublicApi from "../Hooks/usePublicApi";
import { useForm } from 'react-hook-form';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Signup = () => {
    const { register, handleSubmit, reset } = useForm();
    const [District, setDistrict] = useState([])
    const [Upzila, setUpzila] = useState([])
    const PublicKey = usePublicApi();
    const navigate = () => {
         navigation( "/" )
    }

    useEffect(() => {
        fetch('http://localhost:5000/districts')
            .then(res => res.json())
            .then(data => setDistrict(data))
        fetch('http://localhost:5000/upozilas')
            .then(res => res.json())
            .then(data => setUpzila(data))

    }, [])
    const { CreateAccount, GoogleLogin, updatingProfile } = useContext(AuthContext);

    const handleRegister = async (data) => {
        console.log(data);
        if (!data.pass === data.confirm_pass) {
            toast.error('Please provide same password word in both password field')
            return
        }
        const file = { image: data.image[0] };
        const res = await PublicKey.post(imageHostingApi, file, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        const status = 'active'
        if (data.pass.length < 6) {
            toast.error('The password is less than 6 characters', {
                position: 'top-center'
            })
            return;
        }
        if (res.data.success) {
            CreateAccount(data.email, data.pass)
                .then(response => {
                    console.log(response);
                    console.log(response.user.email);
                    console.log(data.name, res.data.data.display_url);
                    if (response.user.email) {
                        updatingProfile( response, data.name, res.data.data.display_url)
                            const user = {
                                name: data.name,
                                email: data.email,
                                pass: data.pass,
                                blood_group: data.blood_grp,
                                district: data.district,
                                upozila: data.upozila,
                                status,
                                image: res.data.data.display_url
                            }
                            fetch('http://localhost:5000/users', {
                                method: "POST",
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(user)
                            })
                            .then(res => res.json())
                            .then(data => {
                                if(data){
                                    toast.success("Account Created Successfully")
                                    navigate();
                                }
                            })
                    }
                })
                .catch(err => {
                    if (err.message == "Firebase: Error (auth/email-already-in-use).") {
                        toast.error("The Email already in use")
                    }
                    else {
                        console.log(err);
                        toast.error(err.message);
                    }
                })
        }

    }
    const handleGGLLogin = () => {
        GoogleLogin()
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
                    navigate()
                }
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen  container mx-auto">
                <div className="flex-1">
                    <img className="w-full" src="https://img.freepik.com/free-vector/demand-insurance-service-digital-insurer-mobile-app-innovative-business-model-female-customer-ordering-insurance-policy-online_335657-2536.jpg?w=740&t=st=1701023827~exp=1701024427~hmac=b6e8b0e2fc4cb9cbcf4a8e15390d556ca2fa9261d04573a4b2dad4c2f3326b79" alt="" />
                </div>
                <div className="flex-1">
                    <div className="w-9/12 md:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto text-center space-y-3 md:space-y-5 lg:space-y-3">
                        <h4 className="text-sm md:text-base lg:text-lg font-bold text-design inter">R E G I S T E R</h4>
                        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-tight font-bold inter">Join Our Health <span className="text-design">Network</span></h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium roboto">Unlock a World of Opportunities – Sign Up for Your Personal Diagnostic Account Today! , Get Started Here.</p>
                    </div>
                    <div className="card-body w-11/12 md:w-full lg:w-10/12 xl:w-9/12 mx-auto">
                        <form className="inter" onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Enter Your Name" className="input input-bordered" required />
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
                                <select {...register('blood_grp', { required: true })} defaultValue={'A+'} className="input input-bordered">
                                    <option value="A+">A+</option>
                                    <option value="A+">A-</option>
                                    <option value="A+">B+</option>
                                    <option value="A+">B-</option>
                                    <option value="A+">AB+</option>
                                    <option value="A+">AB-</option>
                                    <option value="A+">O+</option>
                                    <option value="A+">O-</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">District</span>
                                </label>
                                <select {...register('district', { required: true })} defaultValue={'Pirojpur'} className="input input-bordered" required>
                                    {
                                        District?.map(item => <option key={item.id} value={item.name}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Upzila</span>
                                </label>
                                <select {...register('upozila', { required: true })} defaultValue={'Barura'} className="input input-bordered" required>
                                    {
                                        Upzila?.map(item => <option key={item.id} value={item.name}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} placeholder="Enter Your E-mail" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input type="password" {...register('pass', { required: true })} placeholder="Enter Your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input type="password" {...register('confirm_pass', { required: true })} placeholder="Confirm Your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">CREATE ACCOUNT</button>
                            </div>
                            <h3 className="text-center mt-2 roboto">Don't Have an Account ? <Link className="text-design font-bold" to='/authentication/signin'>LOGIN </Link> </h3>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] h-1 w-full"></div>
                                <h5>OR</h5>
                                <div className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] h-1 w-full"></div>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGGLLogin} className="border-[#8D53FD] border-2 py-2 md:py-3 px-3 md:px-6 lg:px-9 text-design font-bold text-xs md:text-sm  rounded flex items-center justify-center gap-2"><BsGoogle className="text-[#8D53FD] text-lg"></BsGoogle>GOOGLE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;