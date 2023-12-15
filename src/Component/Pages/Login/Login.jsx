import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebook } from "react-icons/fa";
import { ImGooglePlus2 } from "react-icons/im";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from 'sweetalert2'



const Login = () => {
  const {sigIn} = useContext(AuthContext);
const handleLogin = event =>{
  event.preventDefault();
  const form = event.target;
  const email =form.email.value;
  const password = form.password.value;
  console.log(email,password)
  sigIn(email,password)
  .then (result => {
    const user = result.user;
    console.log(user);
    Swal.fire({
      title: "Login in successfully",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    
  })
  
 
}
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
            <form onSubmit={handleLogin} className="card-body">
       
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
