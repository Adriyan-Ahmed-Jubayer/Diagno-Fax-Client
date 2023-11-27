import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Authentication = () => {
    return (
        <>
            <main className="max-w-[1920px] my-10 mx-auto">
                <Outlet></Outlet>
            </main>
            <section>
                <ToastContainer></ToastContainer>
            </section>
        </>
    );
};

export default Authentication;