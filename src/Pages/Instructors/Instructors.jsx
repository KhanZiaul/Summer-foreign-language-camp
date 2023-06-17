import { Zoom } from "react-awesome-reveal";
import useInstructors from "../../Hoooks/useInstructors/useInstructors";


const Instructors = () => {
    const [instructors] = useInstructors()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {instructors?.map(instructor => {
                return (
                    <div key={instructor._id} className="space-y-4 border-[1px] p-8 bg-base-200 cursor-pointer rounded-lg ">
                        <Zoom>
                            <img className="rounded-md h-[350px] w-full" src={instructor.image} alt="" />
                            <p className="font-semibold">Name : {instructor.name}</p>
                            <p className="font-semibold">Email : {instructor.email}</p>
                        </Zoom>
                    </div>
                )
            })}
        </div>
    );
};

export default Instructors;