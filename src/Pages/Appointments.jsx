import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authenticate";
import Appointment_Card from "../Components/Dashboard  Components/Appointment_Card";

const Appointments = () => {
    const {User} = useContext(AuthContext)
    const [appointments, setAppointments] = useState([])
    const userAppointments = () => {
        fetch(`http://localhost:5000/booked?email=${User.email}`)
        .then(res => res.json())
        .then(data => setAppointments(data));
    }
    useEffect(() => {
        userAppointments()
    }, [])
    return (
        <>
            <div className="space-y-6 lg:container mx-auto" >
                {
                    appointments.map(appointment => <Appointment_Card key={appointment._id} appointment={appointment}></Appointment_Card>)
                }
            </div>
        </>
    );
};

export default Appointments;