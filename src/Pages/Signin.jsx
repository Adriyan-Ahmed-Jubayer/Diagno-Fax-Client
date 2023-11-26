import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs"
import { useContext } from "react";
import { AuthContext } from "../Context/Authenticate";
import { toast } from "react-toastify";

const Signin = () => {
    const {LoginAccount,GoogleLogin} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        LoginAccount(email, pass)
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
                    form.reset();
                }
            })
            .catch(err => {
                if (err.message == 'Firebase: Error (auth/network-request-failed).') {
                    toast.error('Your Network Connection is Too Slow!')
                }
                else {
                    toast.error(err.message, {
                        position: "top-center"
                    })

                }
            })
    }
    const handleGGLLogin = () => {
        GoogleLogin()
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
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
                    <img className="w-full" src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1700995211~exp=1700995811~hmac=1d4d3ff89490cf7aaa1e9beb413f9206b00ffba21d0c4217573f6a9d201ec537" alt="" />
                </div>
                <div className="flex-1">
                    <div className="w-9/12 md:w-11/12 lg:w-9/12 xl:w-7/12 mx-auto text-center space-y-3 lg:space-y-6">
                        <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">L O G I N</h4>
                        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold inter">Welcome Back!</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium text-gray-500">Log in to Your MEDIFAX Account to Access Your Health Checkup Guide or Dashboard.</p>
                    </div>
                    <div className="card-body w-11/12 md:w-full lg:w-10/12 xl:w-9/12 mx-auto">
                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-gray-300">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-gray-300">Password</span>
                                </label>
                                <input type="password" name="pass" placeholder="Enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGIN</button>
                            </div>
                            <h3 className="text-center mt-2">Don't Have an Accout ? <Link className="text-design font-bold" to='/authentication/signup'>REGISTER </Link> </h3>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] h-1 w-full"></div>
                                <h5>OR</h5>
                                <div className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] h-1 w-full"></div>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGGLLogin} className=" border-[#8D53FD] border-2 py-2 md:py-3 px-3 md:px-6 lg:px-9 text-design font-bold text-xs md:text-sm  rounded flex items-center justify-center gap-2"><BsGoogle className="text-[#8D53FD] text-lg"></BsGoogle>GOOGLE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signin;