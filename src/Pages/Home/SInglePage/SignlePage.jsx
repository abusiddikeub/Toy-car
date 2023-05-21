import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Router/Provider/AuthProvider';

const SignlePage = () => {
               const { user } = useContext(AuthContext);
               const [toys, setToys] = useState([]);
             
               useEffect(() => {
                 fetch(`https://assignment-11-seven.vercel.app/allToys`)
                   .then((res) => res.json())
                   .then((data) => {
                              const [toys, setToys] = useState([]);
                              (data);
                   });
               }, [user]);
               return (
                              <div>
         {toys.length}
                              </div>
               );
};

export default SignlePage;