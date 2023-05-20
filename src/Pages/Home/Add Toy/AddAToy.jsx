import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Router/Provider/AuthProvider";
import CreatableSelect from "react-select/creatable";
import "./AddAToy.css";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    Swal.fire("Add Toy ", "Successfully done !!!!", "question");
    // option select pawar jonno ata dite hba ------------
    data.skills = selectedOption;

    fetch("https://assignment-11-seven.vercel.app/postToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
      console.log(data);
  };

  // option select file -------
  const options = [
    { value: "Toy Aeroplane", label: "Toy Aeroplane" },
    { value: "Doll", label: "Doll" },
    { value: "Teddy Bear", label: "Teddy Bear" },
    { value: " Rubber Duck", label: " Rubber Duck" },
    { value: "Toy Car", label: "Toy Car" },
    { value: "Toy Train", label: "Toy Train" },
    { value: "Sand Bucket", label: "Sand Bucket" },
    { value: " Drums", label: " Drums" },
    { value: " Rocking Horse", label: " Rocking Horse" },
    { value: "Yo-Yo", label: "Yo-Yo" },
    { value: "Building Block", label: "Building Block" },
  ];

  return (
    <div>
      <h2 className="text-blue-600 text-center text-3xl">
        Toy Add This Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-10">
        {errors.exampleRequired && <span></span>}
        <input
          className="text-input boder border-red-500"
          {...register("image")}
          placeholder="image link"
          type="url"
          //           defaultValue="https://media.istockphoto.com/id/687165852/photo/toys.jpg?s=612x612&w=0&k=20&c=_BdsQLnut3pVc3RYgodD3Xiy7gCCM3K8HX3GdODLRt0="
        />

        <input
          className="text-input"
          {...register("title")}
          placeholder="name"
        />

        <input
          className="text-input"
          {...register("title", { required: true })}
          placeholder="Seller Name"
          value={user?.displayName}
        />

        <input
          className="text-input"
          {...register("Quantity", { required: true })}
          placeholder="Quantity"
          type="number"
        />

        <input
          className="text-input"
          {...register("price", { required: true })}
          placeholder="$ price"
          //           type="number"
        />

        <input
          className="text-input"
          {...register("Rating", { required: true })}
          placeholder="Rating"
        />

        <input
          className="text-input"
          {...register("deadline")}
          placeholder="deadline"
          type="date"
        />

        <input
          className="text-input"
          value={user?.email}
          {...register("postedBy")}
          placeholder="your email"
          type="email"
        />

        <select className="text-input" {...register("status")}>
          <option value="subCategory">Sub-Category</option>
          <option value="toyTrain">Toy Train</option>
          <option value="toyCar">Toy Car</option>
          <option value="toytrack">Toy Track</option>
        </select>

        {/* select korer por dite hba ----- */}
        <CreatableSelect
          className="w-1/2 mb-3"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isMulti
        />
        {/*  */}

        <input
          className="text-input "
          {...register("description")}
          placeholder="Details description"
        />
        <br />

        <input
          className="mt-3 bg-purple-800 text-white p-2 w-1/2 hover:bg-orange-600 rounded-xl"
          value="Submit "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAToy;
