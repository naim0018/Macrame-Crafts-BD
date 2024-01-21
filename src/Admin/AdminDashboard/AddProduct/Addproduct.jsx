import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from "axios";
import Swal from "sweetalert2";

const Addproduct = () => {
  // const [selectedCity, setSelectedCity] = useState(null);
  const [productName, setProductName] = useState()
  const [image, setImage] = useState()
  const [category, setCategory] = useState(null)
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [height, setHeight] = useState()
  const [width, setWidth] = useState()


  const categories = [
    { name: "1 Layer", code: "1L" },
    { name: "2 Layer", code: "2L" },
    { name: "3 Layer", code: "3L" },
    { name: "Wall Hanging", code: "WALL" },
  ];

  const products = {
    title: productName,
    image,
    height, width, description, price

  }
  const handleAddProduct = async (e) => {
    e.preventDefault()
    const data = await axios.post('http://localhost:400/products', products)

    if (data.status === 200) {
      e.target.reset();
      setCategory(null)
      Swal.fire({
        title: "Good job!",
        text: "Product Has Been Added!",
        icon: "success"
      });
    }

  }

  return (
    <>
      <div className="hero min-h-screen -mt-20 pb-24 mb-20">
        <div className=" hero-content flex-col lg:flex-row-revers w-full">
          <div className="card shrink-0  w-4/5 shadow-2xl bg-base-10">
            <form onSubmit={handleAddProduct} className="card-body w-full">
              <div className="form-control" onBlur={e => setProductName(e.target.value)}>
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control" onBlur={e => setImage(e.target.value)}>
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <span className="label-text">Category</span>
                <Dropdown
                  value={category}
                  onChange={(e) => setCategory(e.value)}
                  options={categories}
                  optionLabel="name"
                  editable
                  placeholder="Select a Category"
                  className="w-full md:w-14rem input input-bordered"
                />
              </div>

              <div className="form-control" onBlur={e => setDescription(e.target.value)}>
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control" onBlur={e => setPrice(e.target.value)}>
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex flex-col xl:flex-row xl:gap-5   ">
                <div className="form-control w-full" onBlur={e => setHeight(e.target.value)}>
                  <label className="label">
                    <span className="label-text">Height</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Height"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full" onBlur={e => setWidth(e.target.value)}>
                  <label className="label">
                    <span className="label-text">Width</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Width"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-400">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
