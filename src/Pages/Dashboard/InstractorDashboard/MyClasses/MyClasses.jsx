import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hoooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";

const MyClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)

    const { data: myClasses = [], refetch } = useQuery({
        queryKey: ['instractorClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/myClasses/${user?.email}`)
            return res.data
        }
    })

    console.log(myClasses)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>#</th>
                            <th>language</th>
                            <th>Available Seats</th>
                            <th>Enrolled Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses?.map((myClass, index) => {
                                return (
                                    <tr key={myClass._id}>
                                        <th>{index + 1}</th>
                                        <td>{myClass.name}</td>
                                        <td>{myClass.availableSeats}</td>
                                        <td>{myClass.students}</td>
                                        <td className="font-bold">{myClass.status}</td>
                                        <td >{myClass.feedback ? myClass.feedback : ''}</td>
                                        <td><button className="btn-sm">Update</button></td>
                                       
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClasses;