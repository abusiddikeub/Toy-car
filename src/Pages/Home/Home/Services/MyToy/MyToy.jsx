import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Router/Provider/AuthProvider";
import MyToyShow from "../MyToyShow/MyToyShow";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-seven.vercel.app/myToys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  const handleDeleteButton = (id) => {
    const proceed = Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    if (proceed) {
      fetch(`https://assignment-11-seven.vercel.app/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({

              confirmButtonText: "Are you sure?!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  // handleUpdate

// const handleUpdate =id=>{
//   console.log(id);
//   fetch(`https://assignment-11-seven.vercel.app/myToys/${id}`,{
//     method:'PATCH',
//     headers:{
//       'content-type':'application/json'
//     },
//     body:JSON.stringify({status:'confirm'})
//   })
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data);
//     if(data.modifiedCount>0){
//       const remaining = myToys.filter(myToy => myToy._id !==id )
//       const updateToy = myToys.find(myToy => myToy._id ===id)
//       updateToy.status = 'confirm'
//       const NewToy = [update,...remaining]
//       setMyToys(NewToy);
//     }
//   })
// }


  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Car Name</th>
              <th>Seller Name</th>
              <th>Quantity</th>
              <th>Price </th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToyShow
                myToy={myToy}
                handleDeleteButton={handleDeleteButton}
              ></MyToyShow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
