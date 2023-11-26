import { Outlet } from "react-router-dom";

const Authentication = () => {
    return (
        <>
            <main className="max-w-[1920px] mx-auto space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-48">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Authentication;