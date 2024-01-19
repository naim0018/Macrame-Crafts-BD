import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const UpdateProduct = () => {
  const [category, setCategory] = useState(null)
  const categories = [
    { name: "1 Layer", code: "1L" },
    { name: "2 Layer", code: "2L" },
    { name: "3 Layer", code: "3L" },
    { name: "Wall Hanging", code: "WALL" },
  ];

  const updateProductHandel = event =>{
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const Description = form.Description.value;
    const price = form.price.value;
    const height = form.height.value;
    const width = form.width.value;
  
  };


  return (
    <>
      <div className="">
        <div className=" hero-content flex-col lg:flex-row-revers w-full drop-shadow-[0_40px_45px_rgba(0,0,0,0.40)]">
          <div className="card shrink-0  w-4/5 shadow-2xl bg-white/80">
            <form onSubmit={updateProductHandel} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name </span>
                </label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label">
                <span className="label-text">Category</span>
                </label>
                <Dropdown
                  value={category}
                  onChange={(e) => setCategory(e.value)}
                  options={categories}
                  optionLabel="name"
                 
                  placeholder="Select a Category"
                  className=" w-full md:w-14rem input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="Description"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className=" ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Height</span>
                </label>
                <input
                  type="number"
                  name="height"
                  placeholder="Height"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Width</span>
                </label>
                <input
                  type="number"
                  name="width"
                  placeholder="Width"
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-400 hover:bg-transparent">Update</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;









// import { Dropdown } from "primereact/dropdown";
// import { useState } from "react";
// import "primereact/resources/themes/lara-light-indigo/theme.css";

// const UpdateProduct = () => {
//   const [category, setCategory] = useState(null)
//   const categories = [
//     { name: "1 Layer", code: "1L" },
//     { name: "2 Layer", code: "2L" },
//     { name: "3 Layer", code: "3L" },
//     { name: "Wall Hanging", code: "WALL" },
//   ];

//   const updateProductHandel = event =>{
//     event.preventDefault();
//     const form = event.target;
//     const productName = form.productName.value;
//     const Description = form.Description.value;
//     const price = form.price.value;
//     const height = form.height.value;
//     const width = form.width.value;
  
//   };


//   return (
//     <>
//       <div className="">
//         <div className=" hero-content flex-col lg:flex-row-revers w-full">
//           <div className="card shrink-0  w-4/5 shadow-2xl bg-base-10">
//             <form onSubmit={updateProductHandel} className="card-body w-full">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Product Name </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="productName"
//                   placeholder="Product Name"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div>
//                 <span className="label-text">Category</span>
//                 <Dropdown
//                   value={category}
//                   onChange={(e) => setCategory(e.value)}
//                   options={categories}
//                   optionLabel="name"
//                   editable
//                   placeholder="Select a Category"
//                   className="w-full md:w-14rem input input-bordered bg-black z-10"
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Description</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="Description"
//                   placeholder="Description"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Price</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Number"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className=" ">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Height</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="height"
//                   placeholder="Height"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Width</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="width"
//                   placeholder="Width"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn bg-yellow-400">Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdateProduct;
