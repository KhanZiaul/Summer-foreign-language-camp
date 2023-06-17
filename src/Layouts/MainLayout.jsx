import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { useState } from 'react';
import { MdDarkMode , MdOutlineLightMode } from "react-icons/md";

const MainLayout = () => {

    const [darkOrLight, setDarkOrLight] = useState(false)

    return (
        <>
            <div data-theme={`${darkOrLight ? 'dark' : 'light'}`} className={` ${darkOrLight ? 'text-white' : 'text-black'}`}>
                <div className='ms-9 py-3'>
                    <button className={`${darkOrLight? 'bg-slate-800 hover:bg-slate-800' : 'bg-white hover:bg-white'}`} onClick={() => setDarkOrLight(!darkOrLight)}>
                        {darkOrLight ? 
                        <MdOutlineLightMode className='w-8 h-8 text-white'></MdOutlineLightMode> : 
                        <MdDarkMode className='w-8 h-8 text-black'></MdDarkMode>}
                    </button>
                </div>
                <div className='space-b-12 mb-3 px-5'>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default MainLayout;