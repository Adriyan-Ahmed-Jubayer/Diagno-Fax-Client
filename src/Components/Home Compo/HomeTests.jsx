import { useEffect, useState } from "react";
import HomeCard from "../../Shared/Home Card/HomeCard";
import Section_Heading from "../../Shared/Section Heading/Section_Heading";

const HomeTests = () => {
    const [MostBooked, setMostBooked] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booked')
            .then(res => res.json())
            .then(data => setMostBooked(data))
    }, [])
    const Data = Array.from(new Set(MostBooked.map(item => item.name)))
        .map(name => MostBooked.find(item => item.name === name));
    return (
        <>
            <div className="container mx-auto space-y-6 md:space-y-20">
                <Section_Heading Sub_Title="T E S T S" Title="Featured Tests" Description="Explore our curated collection of featured tests, meticulously designed for accuracy and insight. Elevate your diagnostic experience with cutting-edge precision."></Section_Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {
                        Data && Data.slice(0, 6).map(item => <HomeCard key={item._id} item={item}></HomeCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default HomeTests;