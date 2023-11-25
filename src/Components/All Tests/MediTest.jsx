import axios from "axios";
import { useEffect, useState } from "react";
import MediCard from "./MediCard";

const MediTest = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/tests`)
        .then(res => setData(res.data));
    }, [])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    data && data.map(test  => <MediCard key={test._id} test={test}></MediCard>)
                }
            </div>
        </>
    );
};

export default MediTest;