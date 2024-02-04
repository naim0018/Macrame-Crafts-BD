import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { ImGooglePlus2 } from "react-icons/im";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
   const { register, handleSubmit, formState: { errors } } = useForm();
   const { createUser,googleSignIn } = useContext(AuthContext);
   const navigate = useNavigate();

   const onSubmit = async (data) => {
      try {
         await createUser(data.email, data.password);

         const userInfo = {
            name: data.name,
            email: data.email,
         };

         const response = await axiosPublic.post('/users', userInfo);

         if (response.data.insertedId) {
            navigate('/login'); 
         } else {
            console.error('User registration failed');
         }
      } catch (err) {
         console.error(err.message);
      }
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
            <title>Macrame Crafts BD | Signup</title>
         </Helmet>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Signup!</h1>
                  <p className="py-6">Create Your Account</p>
               </div>
               <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Your Name</span>
                        </label>
                        <input
                           type="name"
                           {...register("name", { required: true })}
                           placeholder="Your Name"
                           className="input input-bordered"
                        />
                        {errors.name && <span>This field is required</span>}
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           {...register("email", { required: true })}
                           placeholder="email"
                           className="input input-bordered"
                        />
                        {errors.email && <span>This field is required</span>}
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="password"
                           {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                           placeholder="password"
                           className="input input-bordered"
                        />
                        {errors.password && <p className="text-red-500">Password must be between 6 and 20 characters</p>}
                     </div>
                     <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Sign up</button>
                     </div>
                     <div>
                        <div className="mb-5 text-center">
                           <p className="">OR</p>
                           <p className="text-sm text-gray-500">Already have an account Please <Link to='/login' className="text-blue-600 font-bold">Login</Link></p>
                        </div>
                        <div className="flex justify-center rounded-full">
                    <button>
                    <FcGoogle onClick={handleGooglePopUp} className="text-4xl  text-red-600"/>
                    </button>
                </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
