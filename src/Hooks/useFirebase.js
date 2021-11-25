import { useEffect, useState } from "react"

import initializedAuthentication from '../Pages/Login/firebase/firebase.init.js'

import { getAuth, signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

initializedAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //return for google  sign handle
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    //observe  whetther user auth state change or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);

        });
    }, [])

    //logout

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});

            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        signInUsingGoogle,
        logOut,
        setUser,
        isLoading,
        setIsLoading

    }
}
export default useFirebase;