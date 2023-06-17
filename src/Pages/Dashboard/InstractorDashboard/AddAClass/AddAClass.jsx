// import { useLocation } from 'react-router-dom';
// import useScroll from '../../useScroll/useScroll';
// import useTitle from '../../useTitle/useTitle';

import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hoooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const image_key = import.meta.env.VITE_IMAG_KEY

const AddAClass = () => {

    const { user } = useContext(AuthContext)
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_key}`
    const [axiosSecure] = useAxiosSecure()

    function formHandler(event) {

        event.preventDefault()

        const classImage = event.target.img.files[0]
        const instructorName = event.target.instructorName.value;
        const email = event.target.instructorEmail.value;
        const name = event.target.classname.value;
        const price = event.target.price.value;
        const availableSeats = event.target.availableSeats.value;

        const formdata = new FormData()
        formdata.append('image', classImage)
        // console.log(formdata)

        fetch(image_hosting_url, {
            method: 'POST',
            body: formdata
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    const image = data.data.display_url
                    const newClass = {
                        instructorName,
                        image,
                        email,
                        name,
                        price,
                        availableSeats,
                        status: 'pending'
                    }
                    axiosSecure.post('/addInstractorClass', newClass)
                        .then(data => {
                            console.log(data.data)
                            Swal.fire(
                                'Successfull!',
                                'Your added class successfully',
                                'success'
                              )
                        })

                    console.log(newClass)
                }
            })

        event.target.reset()
    }

    return (
        <div className=''>
            <div className=" flex-col lg:flex-row-reverse">

                <form onSubmit={formHandler} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input name='img' type="file" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input value={user?.displayName ? user?.displayName : ''} name='instructorName' type="text" placeholder="Instructor name" className="input input-bordered" required readOnly />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input value={user?.email} name='instructorEmail' type="email" placeholder="Instructor email" className="input input-bordered" required readOnly/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input name='classname' type="text" placeholder="Class name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' type="text" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input name='availableSeats' type="text" placeholder="Available seats" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className='btn btn-error text-white'>Add A Class</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;