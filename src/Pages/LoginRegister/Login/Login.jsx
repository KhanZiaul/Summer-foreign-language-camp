import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';


const Login = () => {

    const { signInUser, signInpopUp } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const [color, setColor] = useState(true)
    const [loginMessage, setLoginMessage] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const [showOrHide, setShowOrHide] = useState(true)

    function hideOrShowHandler() {
        setShowOrHide(!showOrHide)
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                setLoginMessage('Successfully Login')
                setColor(true)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });

    }


    function googleHandler() {
        signInpopUp(googleProvider)
            .then((result) => {
                const user = result.user;
                if (user && user.email) {
                    const userDetails = { name: user.displayName, email: user.email , image: user.photoURL , role : "student" }
                    fetch('https://summer-camp-server-seven-jet.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
                console.log('popUp', user)
                setLoginMessage('Successfully Login')
                setColor(true)
            }).catch((error) => {
                const errorMessage = error.message;
                setLoginMessage(errorMessage)
                setColor(false)
            });
    }


    return (
        <div>
            <h1 className="text-4xl font-semibold text-center my-8">LOGIN</h1>
            <div className='w-full md:w-2/4 mx-auto border-2 p-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='relative'>
                        <div className="flex items-center border-b border-slate-700 py-2 mb-4">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" aria-label="Full name" {...register("email", { required: true })} />
                        </div>

                        <div >
                            <div className="flex items-center border-b  border-slate-700 py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type={showOrHide ? 'password' : 'text'} placeholder="Enter your password" aria-label="Full name" {...register("password", { required: true })} />
                            </div>

                            <div className='absolute top-28 right-4'>
                                {
                                    showOrHide ? <EyeIcon onClick={hideOrShowHandler} className="h-6 w-6 text-blue-500 cursor-pointer" /> :
                                        <EyeSlashIcon onClick={hideOrShowHandler} className="h-6 w-6 text-blue-500 cursor-pointer" />
                                }
                            </div>
                        </div>
                        <div className='my-6 flex justify-between flex-col md:flex-row items-center'>
                            <div>
                                <small>New to TongueTied? <Link to='/register' className='text-blue-700 underline hover:text-blue-900'>Create New Account</Link></small>
                            </div>
                        </div>

                        <p className={`text-center my-3 font-bold  ${color ? 'text-green-500' : 'text-red-500'}`}>{loginMessage}</p>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <div className='my-6 flex flex-col md:flex-row gap-5 justify-around'>
                        <div className='inline-block'>
                            <div onClick={googleHandler} className='cursor-pointer border-2 flex items-center rounded-lg text-blue-700 px-8 py-3 gap-4 hover:bg-sky-950 hover:text-white'>
                                <FcGoogle></FcGoogle>
                                <span>Google Sign-in</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
