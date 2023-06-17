import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import FeedBacks from "../FeedBacks/FeedBacks";
import Leaders from "../Leaders/Leaders";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Statistics from "../Statistics/Statistics";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";


const Home = () => {

    return (
        <div className="space-y-20 mt-16 ">
            <div className="flex flex-col-reverse lg:flex-col">
                <Carousel></Carousel>
                <Banner></Banner>
            </div>
            <PopularInstructors></PopularInstructors>
            <PopularClasses></PopularClasses>
            <Statistics></Statistics>
            <UpcomingEvents></UpcomingEvents>
            <Leaders></Leaders>
            <FeedBacks></FeedBacks>
        </div>
    );
};

export default Home;