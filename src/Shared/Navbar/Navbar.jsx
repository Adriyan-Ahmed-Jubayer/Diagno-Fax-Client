import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Authenticate";

const Navbar = () => {
    const { User, LogOutAccount } = useContext(AuthContext);
    const Links = [
        <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded `} to="/" >HOME</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm rounded`} to="/all-tests" >ALL TESTS</NavLink>,
    ]
    return (
        <>
            <div className="navbar py-3 md:py-4 lg:py-6 relative bg-white z-10">
                <div className="navbar-start">
                    <div className="dropdown xl:hidden flex ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 duration-700 shadow-md rounded-md w-52 z-10 gap-3">
                            <h1 className="text-sm md:text-base lg:text-lg xl:text-xl flex items-center justify-center gap-2 font-bold inter"><img className=" h-8" src="https://i.ibb.co/FXwN0tk/bright-luminous-pink-medical-digital-medical-neon-sign-pharmacy-hospital-store-beautiful-shiny-with.png" alt="" />DIAGNO FAX</h1>
                            {
                                Links.map((Link, i) => <li key={i}>{Link}</li>)
                            }
                            <li><NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded`} to="/dashboard" >DASHBOARD</NavLink></li>
                        </ul>
                    </div>
                    <div className="hidden xl:flex">
                        <h1 className="btn btn-ghost normal-case text-sm md:text-base lg:text-lg xl:text-xl flex items-center gap-2 font-bold inter"><img className=" h-12" src="https://i.ibb.co/FXwN0tk/bright-luminous-pink-medical-digital-medical-neon-sign-pharmacy-hospital-store-beautiful-shiny-with.png" alt="" />DIAGNO FAX</h1>
                        <ul className="flex items-center gap-3">
                            {
                                Links.map((Link, i) => <li key={i}>{Link}</li>)
                            }
                            <li><NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded`} to="/dashboard" >DASHBOARD</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        User ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
                                    <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded"> Nothing</li>
                                    <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li onClick={() => LogOutAccount().then(res => toast.success('Log Out Successful !! 👌'))} className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm btn-ghost rounded"><Link>Logout</Link></li>
                                </ul>
                            </div>
                            <button onClick={LogOutAccount} className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGOUT</button>
                        </> : <>
                            <Link to='/authentication/signin'>
                                <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGIN</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;