import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
            <header></header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
            <section>
                <ToastContainer></ToastContainer>
            </section>
        </>
    );
};

export default Root;