import React from 'react';

const UpdateToy = (props) => {
               const {handleUpdate} = props;

               const {
 register,
  handleSubmit,
formState: { errors },
 } = useForm();
 console.log(data);


//  const {handleUpdate} = props;
               return (
                              <div>
                       <form 
//  onSubmit={handleSubmit(handleUpdate)}
 className="grid grid-cols-2"
 >
  <input
          className="text-input"
          {...register("_id")}
          value={_id}
          
        />
     <input
          className="text-input"
          {...register("price", { required: true })}
          placeholder="$ price"
          defaultValue={price}
         
        />
   <input
          className="text-input"
          {...register("Quantity", { required: true })}
          placeholder="Quantity"
          type="number"
          defaultValue={Quantity}
        />
 <input
          className="text-input "
          {...register("description")}
          placeholder="Details description"
          defaultValue={description}
        />
            <input
          className="mt-3 bg-purple-800 text-white p-2 w-1/2 hover:bg-orange-600 rounded-xl"
          value="Submit "
          type="submit"
        />
 </form>                       
                              </div>
               );
};

export default UpdateToy;