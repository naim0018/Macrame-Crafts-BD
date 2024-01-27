import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebook } from "react-icons/fa";

import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useUsersData from "../../../hooks/useUsersData";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



const Login = () => {
  const {signIn,googleSignIn,user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const {data}= useUsersData()

  const from = location.state?.from?.pathname || "/";
const handleLogin = event =>{
  event.preventDefault();
  const form = event.target;
  const email =form.email.value;
  const password = form.password.value;
  signIn(email,password)
  .then (result => {
    const user = result.user;
    if(user){
      Swal.fire({
        title: "Login in successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster377
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
      
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      
    }
    navigate(from, {replace:true});
    
  })
  
 
}
  const handleGooglePopUp =()=>{
    googleSignIn()
    .then (result => {
      
      console.log(result.user.displayName)
      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
     };

     axiosPublic.post('/users', userInfo)
     .then(result=>{
      console.log(result)
       navigate(from, {replace:true});
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

     
     
      
    })
    
  }

  return (
    <div>
      <Helmet>
        <title>Macrame Crafts BD | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 md:-mt-20">
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
                  <a href="/signup" className="label-text-alt link link-hover">
                    Crate an a Account?
                  </a>
                </label>
                
              </div>
              <div>
                <div className="mb-5">
                  <p className="text-center">OR</p>
                </div>
                <div className="flex justify-center rounded-full">
                    <button>
                    <FcGoogle onClick={handleGooglePopUp} className="text-4xl  text-red-600"/>
                    </button>
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
