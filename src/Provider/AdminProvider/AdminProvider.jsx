import { useContext } from "react";
import useAdmin from "../../Hoooks/useAdmin/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminProvider = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()
    const [isAdmin, refetch, isLoading] = useAdmin()
    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminProvider;