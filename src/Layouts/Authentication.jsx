import { Outlet } from "react-router-dom";

const Authentication = () => {
    return (
        <>
            <main className="max-w-[1920px] my-10 mx-auto">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Authentication;