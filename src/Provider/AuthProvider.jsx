import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../FIirebase.config';



export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword (auth,email,password);
    }

    const sigIn = (email,password) => {
        return signInWithEmailAndPassword (auth,email,password);
    }
   
    const logOut = () => {

        return signOut(auth);
    }
    useEffect (() => {
        const unSubceribe = onAuthStateChanged (auth,currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        
        return unSubceribe();
        

    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        sigIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;