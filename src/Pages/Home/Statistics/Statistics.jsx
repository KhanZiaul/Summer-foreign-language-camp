import { Zoom } from "react-awesome-reveal";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";

const Statistics = () => {
    return (
        <div>
            <h2 className="uppercase text-4xl font-semibold text-center">Statistics</h2>
            <p className="text-center my-6">TongueTied was founded on the principle that by pursuing big ideas and sharing what we learn , we make the world <br /> a better place.For more than 20 years , we have not strayed from that vision</p>
            <div className="flex justify-between flex-col lg:flex-row w-[80%] mx-auto mt-12">
                <div >
                    <Zoom>
                        <FaGraduationCap className="w-20 h-20 border-2 rounded-full p-3 mx-auto"></FaGraduationCap>
                        <p className="text-xl font-bold text-center border-b-2 py-3">97%</p>
                        <p className="text-xl text-center mt-3">Graduates</p>
                    </Zoom>
                </div>

                <div >
                    <Zoom>
                        <GrCertificate className="w-20 h-20 border-2 rounded-full p-3 mx-auto"></GrCertificate>
                        <p className="text-xl font-bold text-center border-b-2 py-3">30+</p>
                        <p className="text-xl text-center mt-3">Certified  Teachers</p>
                    </Zoom>
                </div>

                <div >
                    <Zoom>
                        <FaUniversity className="w-20 h-20 border-2 rounded-full p-3 mx-auto"></FaUniversity>
                        <p className="text-xl font-bold text-center border-b-2 py-3">8</p>
                        <p className="text-xl text-center mt-3">Student Campuses</p>
                    </Zoom>
                </div>

                <div >
                    <Zoom>
                        <TbUsers className="w-20 h-20 border-2 rounded-full p-3 mx-auto"></TbUsers>
                        <p className="text-xl font-bold text-center border-b-2 py-3">6510</p>
                        <p className="text-xl text-center mt-3">Students</p>
                    </Zoom>
                </div>

            </div>
        </div>
    );
};

export default Statistics;