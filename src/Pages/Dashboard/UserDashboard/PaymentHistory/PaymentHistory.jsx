import useEnrollClasses from "../../../../Hoooks/useEnrollClasses/useEnrollClasses";


const PaymentHistory = () => {

    const [enrollClasses] = useEnrollClasses()

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>#</th>
                            <th>Email</th>
                            <th>language</th>
                            <th>TransactionId</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollClasses?.map((paymentsHistory, index) => {
                                return (
                                    <tr key={paymentsHistory._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            {paymentsHistory.email}
                                        </td>
                                        <td>{paymentsHistory.name}</td>
                                        <td>{paymentsHistory.TransactionId}</td>
                                        <td className="font-bold">{paymentsHistory.date}</td>
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

export default PaymentHistory;