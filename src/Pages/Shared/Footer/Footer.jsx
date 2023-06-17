import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center mt-12 text-white p-10 bg-[#010138]  rounded">
                <div className="grid grid-flow-col gap-4">
                    <h2 className="text-3xl font-bold">TongueTied</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/instructors' className="link link-hover">Instructors</Link>
                    <Link to='/classes' className="link link-hover">Classes</Link>
                    <Link to='/aboutUs' className="link link-hover">About Us</Link>
                    <Link to='/contactUs' className="link link-hover">Contact Us</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        
                        <Link to='https://twitter.com/KhanZia07'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>

                        <Link to='https://www.linkedin.com/in/khan-ziaul-hasan-64299320a/'> <CiLinkedin className="w-6 h-6"></CiLinkedin> </Link>

                        <Link to='https://www.facebook.com/profile.php?id=100006621013410'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>

                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by TongueTied</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;