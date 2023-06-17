import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const UpcomingEvents = () => {

    const [events, setEvents] = useState()

    useEffect(() => {
        fetch('https://summer-camp-server-seven-jet.vercel.app/events')
            .then(res => res.json())
            .then(datas => {
                setEvents(datas)
            })
    }, [])

    return (
        <div className="my-16">
            <h2 className="uppercase text-4xl font-semibold text-center mb-28">our upcoming events</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    events?.map(event => {
                        return (
                            <SwiperSlide key={event._id}>
                                <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                                   
                                        <img className="" src={event.image} alt="" />
                                        <div className='space-y-3'>
                                            <p className="text-3xl font-semibold">{event.eventName}</p>
                                            <p className="text-2xl">{event.time}</p>
                                            <p className="text-2xl">{event.dateWithPlace}</p>
                                            <p className="text-justify">{event.details}</p>
                                        </div>
                                    
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>


        </div >
    );
};

export default UpcomingEvents;