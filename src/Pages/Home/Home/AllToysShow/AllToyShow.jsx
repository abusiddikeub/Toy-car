import React from "react";

const AllToyShow = ({toy}) => {

const {title,price,Quantity,image,status} = toy


  return (
<div>
<div>      
<div className="overflow-x-auto">
{/* <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>vacancy</th>
              <th>salary</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>{job.vacancy}</td>
                <td>{job.salary}</td>
                <td>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </Button>
                  <UpdateJobModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    job={job}
                    handleJobUpdate={handleJobUpdate}
                  />
                </td>
                <td>
                  {" "}
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table> */}
</div>        
</div>
</div>
  )
};

export default AllToyShow;
