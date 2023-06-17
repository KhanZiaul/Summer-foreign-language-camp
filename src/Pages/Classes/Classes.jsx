import { useContext } from "react";
import useAdmin from "../../Hoooks/useAdmin/useAdmin";
import useClasses from "../../Hoooks/useClasses/useClasses";
import useInstructor from "../../Hoooks/useInstractor/useInstrctor";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hoooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";



const Classes = () => {
    const [classes] = useClasses()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()

    function selectButton(id) {
        if (user) {
            const selectClass = classes.find(sc => sc._id === id)
            selectClass.classId = selectClass._id
            delete selectClass._id
            const modifyClass = { ...selectClass, email: user?.email, payment: false }
            axiosSecure.post(`/selectedClass/${user?.email}`, modifyClass)
                .then(data => {
                    console.log(data.data)
                    if (data.data.isExist) {
                        return (
                            Swal.fire({
                                icon: 'error',
                                title: 'Sorry bro...',
                                text: 'Already, You added!',
                            })
                        )

                    }
                    else if (data.data.acknowledged) {
                        return (
                            Swal.fire({
                                icon: 'success',
                                title: 'New class added!',
                            })
                        )
                    }
                })
        }
        else {
            navigate('/login')
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {classes?.map((singleClass, index) => {
                return (
                    <div key={index} className={`space-y-4 border-[1px] p-8 cursor-pointer rounded-lg  ${singleClass.availableSeats === 0 ? 'bg-red-200' : 'bg-base-200'}`}>
                        <Slide>
                            <img className="rounded-md h-[350px] w-full" src={singleClass.image} alt="" />
                            <p className="font-semibold">Name : {singleClass.name}</p>
                            <p className="font-semibold">Instructor Name : {singleClass.instructorName}</p>
                            <p className="font-semibold">Available Seats : {singleClass.availableSeats}</p>
                            <p className="font-semibold">Price : ${singleClass.price}</p>

                            <button onClick={() => selectButton(singleClass._id)} className={`btn px-5 py-2 text-white w-full ${singleClass.availableSeats === 0 ? 'bg-red-600' : 'bg-[#4036f7] hover:bg-[#0a00c9]'}`} disabled={singleClass.availableSeats === 0 ||
                                (user ? (isAdmin || isInstructor) : false)}>Select</button>
                        </Slide>
                    </div>
                )
            })}
        </div>
    );
};

export default Classes;