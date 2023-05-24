import React, { Children, createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';



// 1st kaj--------
export const AuthContext = createContext(null);
const auth = getAuth(app)
// ---------

// 2nd kaj children k bosano -----
const AuthProvider = ({children}) => {

// 5th kaj ----
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true)

// 7th kaj ----- register ar jonno 
const createUser = (email,password) =>{
               return createUserWithEmailAndPassword(auth,email,password)
}

// 8th kaj login ar jonno ----------
const signIn = (email,password) =>{
               return signInWithEmailAndPassword(auth,email,password);
}


// 9th kaj ------ state change 

useEffect(()=>{

     const unsubscribe = onAuthStateChanged(auth,currentUser =>{
               console.log('current user' , currentUser);
               setUser(currentUser);
               setLoading(false)
           });

           return() =>{
               unsubscribe();
           }

},[])


// 10th logOut and login ------

const logOut =() =>{
            return  signOut(auth);
} 


// 6th kaj -----
const authInfo = {
               user,
               loading,
               createUser,
               signIn,
               logOut,
             
}
               return (   

// 3rd kaj hosche  authContext.provider value={} bosano ------then tar modda {children bosano}

                              <AuthContext.Provider value={authInfo}>
                                    {children}         
                              </AuthContext.Provider>
               );
};

export default AuthProvider;

// 4th kaj hosche main jsx ar modda jaye <AuthProvider> bosano router ar modda -----