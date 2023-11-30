import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen gap-y-12">
                <div>
                    <img className="w-full" src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?t=st=1701339825~exp=1701340425~hmac=4035ce5933f3f48a6f5070dd8a45840936f65158e7edbe1b5b7c25a757b28eeb" alt="" />
                </div>
                <div>
                    <Link to="/">
                        <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">BACK TO HOME</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Error;