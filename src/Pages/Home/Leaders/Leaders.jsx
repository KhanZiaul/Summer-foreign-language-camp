import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const Leaders = () => {

    const [leaders, setLeaders] = useState()

    useEffect(() => {
        fetch('https://summer-camp-server-seven-jet.vercel.app/leaders')
            .then(res => res.json())
            .then(datas => {
                setLeaders(datas)
            })
    }, [])

    return (
        <>
            <h2 className="uppercase text-4xl font-semibold text-center">Our Leaders</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                {
                    leaders?.map(leader => {
                        return (
                            <div key={leader._id} className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl p-5">
                                <Slide>
                                    <figure><img className="h-[400px] w-full" src={leader.image} alt="feedback" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{leader.name}</h2>
                                        <p>{leader.position}</p>
                                    </div>
                                </Slide>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Leaders;