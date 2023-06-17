import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

function useAdmin() {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: isAdmin = [], isLoading, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/${user?.email}`)
            return res.data.admin;
        }
    })

    return [isAdmin, refetch, isLoading]

}
export default useAdmin;