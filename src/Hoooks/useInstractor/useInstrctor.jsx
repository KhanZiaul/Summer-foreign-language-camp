import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

function useInstructor(){
    const {user , loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const{ data: isInstructor = [] , isLoading , refetch} = useQuery({
        queryKey:['isInstructor',user?.email],
        enabled:!loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/instructor/${user?.email}`)
            console.log(res.data)
            return res.data.instructor;
        }
    })

    return [isInstructor , isLoading , refetch]
}

export default useInstructor;