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
    console.log(MostBooked);
    const Data = Array.from(new Set(MostBooked.map(item => item.name)))
        .map(name => MostBooked.find(item => item.name === name));
        console.log(uniqueData);
    return (
        <>
            <div>
                <div>
                    <Section_Heading Sub_Title="T E S T S" Title="Featured Tests" Description="Explore our curated collection of featured tests, meticulously designed for accuracy and insight. Elevate your diagnostic experience with cutting-edge precision."></Section_Heading>
                    <div>
                        {
                            Data && Data.slice(0,6).map(item => <HomeCard></HomeCard>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTests;