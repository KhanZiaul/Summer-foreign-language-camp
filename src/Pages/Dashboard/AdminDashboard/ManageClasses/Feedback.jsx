import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hoooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const Feedback = () => {

    const { id } = useParams()
    const [axiosSecure] = useAxiosSecure()
    console.log(id)
    function feedbackHandler(e) {
        e.preventDefault()
        const feedback = e.target.feedback.value
        axiosSecure.patch(`/feedbackClass/${id}`, { feedback: feedback })
            .then(data => {
                console.log(data.data)
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You have given feedback successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>

            <h2 className="mb-4 text-xl font-semibold text-center uppercase">Feedback</h2>

            <form onSubmit={feedbackHandler}>

                <textarea name="feedback" className="textarea textarea-bordered w-full" placeholder="Write your feedback here......."></textarea>

                <button className="btn btn-error text-white">submit feedback</button>
            </form>
        </div>
    );
};

export default Feedback;