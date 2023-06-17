import useAxiosSecure from "../../../../Hoooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import useUserClasses from "../../../../Hoooks/useUserClasses/useUserClasses";

const UserClasses = () => {
    const [axiosSecure] = useAxiosSecure()

    const [data, refetch] = useUserClasses()

    function deleteClass(id) {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteClass/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        console.log(data.data)
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
                            <th>language</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>pay</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((selectClass, index) => {
                                return (
                                    <tr key={selectClass._id}>
                                        <th>{index + 1}</th>
                                        <td>{selectClass.name}</td>
                                        <td>{selectClass.instructorName}</td>
                                        <td>{selectClass.availableSeats}</td>
                                        <td>
                                            <Link to={`/dashboard/payment/${selectClass._id}`}>
                                                <button className="bg-[#4941eb] hover:bg-[#2c22e6] btn-sm text-white rounded-md">PAY</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteClass(selectClass._id)} className="bg-[#e71c6a] hover:bg-[#c70a7b] btn-sm text-white rounded-md">DELETE</button>
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

export default UserClasses;