import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Router/Provider/AuthProvider';

const SignlePage = () => {
               const { user } = useContext(AuthContext);
               const [toys, setToys] = useState([]);
             
               useEffect(() => {
                 fetch(`https://assignment-11-seven.vercel.app/AllToys/${user?.email}`)
                   .then((res) => res.json())
                   .then((data) => {
                     console.log(data);
                   });
               }, [user]);
               return (
                              <div>
          
                              </div>
               );
};

export default SignlePage;