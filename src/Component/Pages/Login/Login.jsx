import { Helmet } from "react-helmet-async";
import { FaFacebook } from "react-icons/fa";
import { ImGooglePlus2 } from "react-icons/im";
const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Macrame Crafts BD | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              you can login fist
            </p>
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                  <a href="/sigup" className="label-text-alt link link-hover">
                    Crate an a Account?
                  </a>
                </label>
                
              </div>
              <div>
                <div className="mb-5">
                  <p className="text-center">OR</p>
                </div>
                <div className="flex justify-center gap-5">
                    <FaFacebook className="text-4xl text-primary hover:text-yellow-600"/>
                    <ImGooglePlus2 className="text-4xl text-red-600 hover:text-yellow-600"/>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
