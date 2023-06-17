import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    function createUser(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signInUser(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        setLoading(true)
        return signOut(auth)
    }

    function signInpopUp(provider) {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                axios.post('https://summer-camp-server-seven-jet.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        signInpopUp,
        createUser,
        signInUser,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;