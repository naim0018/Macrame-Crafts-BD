import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const Addproduct = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "1 Layer", code: "1L" },
    { name: "2 Layer", code: "2L" },
    { name: "3 Layer", code: "3L" },
    { name: "Tof", code: "TO" },
    { name: "Wall Hanging", code: "WALL" },
  ];

  return (
    <>
      <div className="hero min-h-screen border-4 pb-24 mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
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
              <div>
                <span className="label-text">Categoary</span>
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  editable
                  placeholder="Select a Categoary"
                  className="w-full md:w-14rem input input-bordered"
                />
              </div>

              <div className="form-control">
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

              <div className="form-control">
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
              <div className="form-control">
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
              <div className="form-control">
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
              <div className="form-control mt-6">
                <button className="btn bg-yellow-400">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
