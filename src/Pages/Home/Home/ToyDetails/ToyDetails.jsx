import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyShowDetails from '../ToyShowDetrails/ToyShowDetails';

const ToyDetails = () => {
               const toys = useLoaderData()
               console.log("toys",toys)
               return (
                              <div>
  {toys.map(toy => <ToyShowDetails
  
  toy={toy}
  
  ></ToyShowDetails>)}                     
                              </div>
               );
};

export default ToyDetails;