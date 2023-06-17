import { useContext } from "react";
import useAxiosSecure from "../../../../Hoooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)

    const { data: newClasses = [], refetch } = useQuery({
        queryKey: ['instractornewClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/instrctorClasses/true`)
            return res.data
        }
    })

    function approvedHandler(id) {
        axiosSecure.patch(`/approvedClass/${id}`, { status: 'approved' })
            .then(data => {
                console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You Approved Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    function denyHandler(id) {
        axiosSecure.patch(`/denyClass/${id}`, { status: 'deny' })
            .then(data => {
                console.log(data.data)
                refetch()
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'You Deny It',
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
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newClasses?.map((newClass, index) => {
                                return (
                                    <tr key={newClass._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={newClass.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{newClass.name}</td>
                                        <td>{newClass.instructorName}</td>
                                        <td>{newClass.email}</td>
                                        <td>{newClass.availableSeats}</td>
                                        <td>${newClass.price}</td>
                                        <td className="font-bold">{newClass.status}</td>
                                        <div className='flex flex-col gap-3'>
                                            <button onClick={() => approvedHandler(newClass._id)} className='btn btn-xs' disabled={newClass.status === "approved" || newClass.status === "deny"}>Approve</button>
                                            <button onClick={() => denyHandler(newClass._id)} className='btn btn-xs' disabled={newClass.status === "approved" || newClass.status === "deny"}>Deny</button>

                                            <Link to={`/dashboard/feedback/${newClass._id}`}> <button className='btn btn-xs mb-2'>Feedback</button></Link>

                                        </div>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default ManageClasses;