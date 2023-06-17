import image1 from '../../../assets/Images/img1.png'
import image2 from '../../../assets/Images/img2.png'
import image3 from '../../../assets/Images/img3.png'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full h-[300px] lg:h-[550px] relative">
                    <img src={image2} className="w-full" />
                    <h2 className='absolute bottom-10 font-semibold right-10 text-xl lg:text-4xl text-white opacity-30'>Open Your Mind, Embrace Diversity</h2>
                </div>

                <div id="item2" className="carousel-item w-full h-[300px] lg:h-[550px] relative">
                    <img src={image1} className="w-full" />
                    <h2 className='absolute bottom-10 font-semibold right-10 text-xl lg:text-4xl text-white opacity-30'>Empower Yourself with Words!</h2>
                </div>

                <div id="item3" className="carousel-item w-full h-[300px] lg:h-[550px] relative">
                    <img src={image3} className="w-full" />
                    <h2 className='absolute bottom-10 font-semibold right-10 text-xl lg:text-4xl text-white opacity-30'>Learn, Play, and Connect!</h2>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2 mt-4">
                <a href="#item1" className="btn btn-error hover:bg-red-700 text-white btn-xs">1</a>
                <a href="#item2" className="btn btn-error hover:bg-red-700 text-white btn-xs">2</a>
                <a href="#item3" className="btn btn-error hover:bg-red-700 text-white btn-xs">3</a>
            </div>
        </div>
    );
};

export default Carousel;