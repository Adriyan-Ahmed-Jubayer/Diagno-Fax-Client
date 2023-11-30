import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import { Circles } from 'react-loader-spinner'
import { AuthContext } from "../../Context/Authenticate";
import axios from "axios";

const Protection = ({ children }) => {
    const { User, isLoading } = useContext(AuthContext);
    const [userData, setUserData] = useState({})

    useEffect(() => {
        if (User) {
            axios.get(`http://localhost:5000/single/user?email=${User?.email}`)
                .then(res => {
                    setUserData(res.data)
                })
        }
    }, [User])

    if (isLoading) {
        return (<div className="flex justify-center text-purple-600 items-center min-h-screen">
            <Circles
                height="80"
                width="80"
                color="#8D53FD"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>)
    }
    if (!User) {
        toast.warn('You need to login to access the route', {
            position: "top-center"
        })
        return <Navigate to="/authentication/signin"></Navigate>
    }
    if (User) {

        if (!userData) {
            return <></>
        }
        if (userData.status === 'active') {
            return children;
        }
        if (userData.status === 'blocked') {
            toast.warn('You are Blocked', {
                position: "top-center"
            })
            return <Navigate to="/"></Navigate>
        }
    }
};

export default Protection;