import useEnrollClasses from "../../../../Hoooks/useEnrollClasses/useEnrollClasses";

const EnrollClasses = () => {

    const [enrollClasses] = useEnrollClasses()

    console.log(enrollClasses)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>#</th>
                            <th>Image</th>
                            <th>language</th>
                            <th>Instructor Name</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollClasses?.map((enrollClass, index) => {
                                return (
                                    <tr key={enrollClass._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={enrollClass.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{enrollClass.name}</td>
                                        <td>{enrollClass.instructorName}</td>
                                        <td className="font-bold">{enrollClass.payment?'DONE' : 'PENDING'}</td>
                                        <td className="font-bold">Enrolled</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EnrollClasses;