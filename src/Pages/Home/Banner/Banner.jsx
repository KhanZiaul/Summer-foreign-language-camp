import Lottie from "lottie-react";
import language from '../../../assets/Images/lottie.json'
import { Zoom } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="flex items-center flex-col lg:flex-row gap-7 mt-12">
            <div className="w-[90%] ms-4">
                <Zoom>
                    <h2 className="text-4xl font-bold mb-10">Learn New Languages and <br /> Move Forward</h2>
                    <p className="text-justify"> Explore, Learn, and Make Memories at TongueTied Unforgettable Summer Camp! Immerse yourself in a multicultural oasis where linguistic adventures await. From interactive lessons to thrilling outdoor activities, our summer camp blends education and excitement, offering a unique opportunity to develop fluency in a foreign language while forging lifelong friendships. Discover the beauty of diverse cultures, broaden your horizons, and ignite your passion for languages. Join us at TongueTied and unlock a world of endless possibilities. Enroll today and seize the summer with the power of words!</p>
                </Zoom>
            </div>
            <Lottie className="bg-white" animationData={language} loop={true} />
        </div>
    );
};

export default Banner;