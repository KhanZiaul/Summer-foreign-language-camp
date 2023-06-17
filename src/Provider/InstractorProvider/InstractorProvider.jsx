import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../../Hoooks/useInstractor/useInstrctor";
import { AuthContext } from "../AuthProvider/AuthProvider";


const InstractorProvider = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()
    const [isInstructor, isLoading] = useInstructor()
    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isInstructor) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default InstractorProvider;