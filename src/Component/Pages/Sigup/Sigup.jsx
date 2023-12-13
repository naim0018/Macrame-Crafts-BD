
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Sigup = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sigup!</h1>
            <p className="py-6">Crate Your Account</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover">
                    Login Here?
                  </a>
                </label>
              </div>
              <div>
                <div className="mb-5">
                <p className="text-center font-bold">Or</p>
                </div>
                <div className="flex justify-center gap-5">
                    <FaFacebook className="text-2xl"/>
                    <CgMail className="text-3xl"/>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sigup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sigup;
