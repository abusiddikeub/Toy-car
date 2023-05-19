import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Router/Provider/AuthProvider";
import AllToyShow from "../AllToysShow/AllToyShow";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/AllToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  return (
    <div>
      <h2 className="text-3xl text-center text-green-600 mb-6">
        All Toys Details
      </h2>
      <table className="container mb-9">
          <thead className="bg-orange-400 text-white rounded-xl">
            <tr>
              <th className="bg-orange-800 rounded text-white">#</th>
              <th>Toy Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              
              <tr className="border rounded-lg text-center">
                <td>{index + 1}</td>
                <td>{toy.title}</td>
                <td>{toy.Quantity}</td>
                <td>{toy.price}</td>
                <td>{toy.Rating}</td>
                <td>
                  {/* <button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </button> */}
                  <button className="btn btn-outline btn-success">Edit</button>
                  {/* <UpdateJobModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    job={job}
                    handleJobUpdate={handleJobUpdate}
                  /> */}
                </td>
                <td>
                  {" "}
                  <button className="btn btn-outline btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default AllToys;
