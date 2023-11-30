import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Circles } from 'react-loader-spinner'
import { AuthContext } from "../../Context/Authenticate";
import axios from "axios";

const AdminProtector = ({ children }) => {
    const { User, isLoading } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/single/user?email=${User?.email}`)
            .then(res => {
                setUserData(res.data);
            })
    }, [])
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
        const status =userData?.status;
        const role = userData?.role;

        if (status === 'active' && role === 'admin') {
            return children
        }
        else if( status === 'block' || role === 'user' ) {
            toast.warn('You are Blocked or not Admin', {
                position: "top-center"
            })
            return <Navigate to="/dashboard/profile"></Navigate>
        }
    }
};

export default AdminProtector;