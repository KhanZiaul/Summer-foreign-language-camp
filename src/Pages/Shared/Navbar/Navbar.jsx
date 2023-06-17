import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FaUser } from 'react-icons/fa';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    function logOutHandler() {
        logOut().then(() => {

        }).catch((error) => {
            console.log(error)
        });
    }

    const lists = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/instructors"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                Instructors
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/classes"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                Classes
            </NavLink>
        </li>
        {
            user &&
            <li>
                <NavLink
                    to="/dashboard/dashboardHome"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </li>
        }

        <li>
            {
                user ?
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        <div className="flex items-center justify-center">
                            {
                                user?.photoURL ?
                                    <img title={user.displayName} src={user.photoURL} className='w-12 h-12 rounded-full cursor-pointer' alt="" />
                                    :
                                    <FaUser title={user.displayName} className=' bg-slate-400 w-12 h-12 rounded-full cursor-pointer p-2' />
                            }
                        </div>
                        <button onClick={logOutHandler} className="btn btn-error text-white">Log out</button>
                    </div>
                    :
                    <Link to='/login' className="btn btn-error text-white">Login</Link>
            }
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content bg-slate-500 p-6 text-white">
                            {
                                lists
                            }
                        </ul>
                    </div>
                    <a className="normal-case font-semibold text-xl lg:text-3xl ">TongueTied</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex gap-4 items-center font-semibold text-xl">
                        {
                            lists
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;