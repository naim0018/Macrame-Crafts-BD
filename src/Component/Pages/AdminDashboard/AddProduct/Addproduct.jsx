import React from "react";

const Addproduct = () => {
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Catagoary</span>
                </label>
                <input
                  type="text"
                  placeholder="Catagoary"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Catagoary"
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
