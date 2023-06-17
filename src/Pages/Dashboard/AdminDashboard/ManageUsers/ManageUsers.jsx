import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hoooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure()
    const { loading } = useContext(AuthContext)

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })


    function makeInstructorHandler(id) {
        axiosSecure.patch(`/makeInstructor/${id}`, { updatedRole : 'true' , role : "instructor" })
            .then(data => {
                console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Make Instructor Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    function makeAdminHandler(id) {
        axiosSecure.patch(`/makeAdmin/${id}`, { updatedRole : 'true' , role : "admin" })
            .then(data => {
                console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Make Admin Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((allUser, index) => {
                                return (
                                    <tr key={allUser._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <img className="w-10 h-10 rounded-full" src={allUser.image} alt="user" />
                                        </td>
                                        <td>{allUser.name}</td>
                                        <td>{allUser.email}</td>
                                        <td className="font-bold">{allUser.role}</td>
                                        <td>
                                            <button onClick={()=> makeInstructorHandler(allUser._id)} className="btn btn-xs" disabled={allUser.updatedRole === "true"}>Instructor</button>
                                        </td>
                                        <td>
                                            <button onClick={()=> makeAdminHandler(allUser._id)} disabled={allUser.updatedRole === "true"} className="btn btn-xs">Admin</button>
                                        </td>

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

export default ManageUsers;