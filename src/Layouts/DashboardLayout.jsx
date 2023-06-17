import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hoooks/useAdmin/useAdmin";
import useInstructor from "../Hoooks/useInstractor/useInstrctor";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { LuSchool , LuSchool2 } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdManageAccounts } from "react-icons/md";
import { MdPostAdd , MdPayment } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { SiAmazonpay } from "react-icons/si";

const DashboardLayout = () => {

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-7 ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-error text-white drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu py-8 px-5 w-80 h-full bg-slate-500 gap-4 font-semibold text-white">
                        {/* Sidebar content here */}
                        {
                            isAdmin && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageClasses"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                           <MdManageAccounts className="w-5 h-5 text-white"></MdManageAccounts> Manage Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageUsers"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                          <HiOutlineUserGroup className="w-5 h-5 text-white"></HiOutlineUserGroup>  Manage Users
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }
                        {
                            isInstructor && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/addAClass"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                           <MdPostAdd className="w-5 h-5 text-white"></MdPostAdd> Add a Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myClasses"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                          <LuSchool2 className="w-5 h-5 text-white"></LuSchool2>  My Classes
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        {
                            !isAdmin && !isInstructor && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/userClass"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                          <BiSelectMultiple className="w-5 h-5 text-white"></BiSelectMultiple>  My Selected Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/enrolledClasses"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                          <MdPayment className="w-5 h-5 text-white"></MdPayment> My Enrolled Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/paymentHistory"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                           <SiAmazonpay className="w-5 h-5 text-white"></SiAmazonpay> My Payment History
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }
                        <hr />

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                               <BiHomeAlt2 className="w-5 h-5 text-white"></BiHomeAlt2> <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/instructors"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                               <TbUsers className="w-5 h-5 text-white"></TbUsers> Instructors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/classes"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                               <LuSchool className="w-5 h-5 text-white"></LuSchool> Classes
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;