import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Router/Provider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import SinglePageShow from '../../singlePageShow/SinglePageShow';

const SignlePage = () => {
              
               const singlePage = useLoaderData();
             console.log(singlePage);
             
               return (
                              <div>
      
         <div className='grid grid-cols-2 p-9'>
          {singlePage.map(page=><SinglePageShow
          page={page}
          ></SinglePageShow>)}
         </div>
                              </div>
               );
};

export default SignlePage;