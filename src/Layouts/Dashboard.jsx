import { useContext } from "react";
import { AuthContext } from "../Context/Authenticate";
import { Link, Outlet } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";

const Dashboard = () => {
    const { User, LogOutAccount } = useContext(AuthContext);
    return (
        <>
            <div className="navbar py-3 md:py-4 lg:py-6 relative bg-white max-w-[1920px] mx-auto">
                <div className="navbar-start gap-3">
                <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden"><RiMenu4Line /></label>
                    <h1 className="text-sm md:text-base lg:text-lg xl:text-xl flex items-center justify-center gap-2 font-bold inter"><img className=" h-8" src="https://i.ibb.co/FXwN0tk/bright-luminous-pink-medical-digital-medical-neon-sign-pharmacy-hospital-store-beautiful-shiny-with.png" alt="" />DIAGNO FAX</h1>
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
            <div className="lg:drawer-open lg:flex lg:flex-row-reverse  max-w-[1920px] mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <main className="max-w-[1920px] w-full mx-auto space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-48">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    
                </main>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;