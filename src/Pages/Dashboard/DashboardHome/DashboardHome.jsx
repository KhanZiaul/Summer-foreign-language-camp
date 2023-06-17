import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import image from '../../../assets/Images/dashboard.jpg'

const DashboardHome = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h2 className="text-5xl text-center"> Welcome Back {user?.displayName} !!!</h2>
            <img src={image} className="h-[500px] mx-auto mt-5" alt="" />
        </div>
    );
};

export default DashboardHome;