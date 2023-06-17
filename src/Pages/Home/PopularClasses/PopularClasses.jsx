import { Zoom } from "react-awesome-reveal";
import useClasses from "../../../Hoooks/useClasses/useClasses";


const PopularClasses = () => {

    const [classes] = useClasses()
    return (
        <>
            <div>
                <h2 className="text-center text-4xl font-semibold uppercase">Popular Classes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes?.slice(0, 6).map(singleClass => {
                    return (
                        <Zoom key={singleClass._id}>
                            <div className='border-2 border-gray-100 drop-shadow-lg'>
                                <img className='w-full h-64 hover:opacity-20 rounded-md' src={singleClass.image} alt="" />
                                <h2 className='absolute top-0  bg-zinc-800 font-semibold text-white text-2xl inset-0 rounded-md opacity-0 hover:opacity-75 p-5 cursor-pointer'>{singleClass.name}</h2>

                            </div>
                        </Zoom>

                    )
                })}
            </div>

        </>
    );
};

export default PopularClasses;