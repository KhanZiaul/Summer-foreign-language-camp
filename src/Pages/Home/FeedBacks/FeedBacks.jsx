import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

const FeedBacks = () => {

    const [feedbacks, setFeedbacks] = useState()

    useEffect(() => {
        fetch('https://summer-camp-server-seven-jet.vercel.app/feedbacks')
            .then(res => res.json())
            .then(datas => {
                setFeedbacks(datas)
            })
    }, [])

    return (
        <>
            <h2 className="uppercase text-4xl font-semibold text-center">Feedbacks</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                {
                    feedbacks?.map(feedback => {
                        return (
                            <div key={feedback._id} className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl p-5">
                                <Zoom>
                                    <figure><img className="h-[400px] w-full" src={feedback.image} alt="feedback" /></figure>

                                    <div className="card-body">
                                        <h2 className="card-title">{feedback.name}</h2>
                                        <p>{feedback.feedback}</p>
                                    </div>
                                </Zoom>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default FeedBacks;