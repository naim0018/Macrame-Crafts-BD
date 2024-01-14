import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { ImGooglePlus2 } from "react-icons/im";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
   const { register, handleSubmit, formState: { errors } } = useForm();
   const { createUser } = useContext(AuthContext);
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
                        <div className="mb-5">
                           <p className="text-center">OR</p>
                        </div>
                        <div className="flex justify-center gap-5">
                           <FaFacebook className="text-4xl text-primary hover:text-yellow-600" />
                           <ImGooglePlus2 className="text-4xl text-red-600 hover:text-yellow-600" />
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
