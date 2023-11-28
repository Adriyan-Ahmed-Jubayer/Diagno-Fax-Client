import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <>
            <header className="max-w-[1920px] mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="max-w-[1920px] mx-auto space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-48">
                <Outlet></Outlet>
            </main>
            <footer className="max-w-[1920px] mx-auto mt-16 md:mt-24">
                <Footer></Footer>
            </footer>
            <section>
                <ToastContainer></ToastContainer>
            </section>
        </>
    );
};

export default Root;