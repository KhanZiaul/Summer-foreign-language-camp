import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

function useEnrollClasses() {
    const [axiosSecure] = useAxiosSecure()
    const {user , loading} = useContext(AuthContext)

    const { data: enrollClasses = [], refetch } = useQuery({
        queryKey: ['userClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledClass/${user?.email}`)
            return res.data
        }
    })
    return [enrollClasses , refetch]
}

export default useEnrollClasses;