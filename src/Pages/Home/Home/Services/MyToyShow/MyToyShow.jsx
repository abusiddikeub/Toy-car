import React from "react";
import { useForm } from "react-hook-form";
import UpdateToy from "../../updateToy/UpdateToy";

const MyToyShow = ({ myToy,handleDeleteButton,handleUpdate}) => {
  const { _id,image, Quantity, title, status, price, deadline,postedBy,description } = myToy;


  return (

      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
            </div>
          </div>
        </td>
        <td>{status}</td>
        <td>{title}</td>
        <td>{Quantity}</td>
        <td>{price}</td>
        <td>{postedBy}</td>
        <th>

{
  status ==="confirm" ? <span>confirm</span>:
  
  <button 
onClick={()=>handleUpdate(_id)}
className="btn btn-success">Update</button>}

        </th>
        <th>
        <button  
        onClick={()=>handleDeleteButton(_id)}
        className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        
      </tr>
    
   
  );
};

export default MyToyShow;
