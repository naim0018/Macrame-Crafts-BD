
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { ImGooglePlus2 } from "react-icons/im";


const Sigup = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

  }

  return (
    <div>
      <Helmet>
        <title>Macrame Crafts BD | Sigup</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sigup!</h1>
            <p className="py-6">Crate Your Account</p>
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
                  {...register("password",{ required: true, minLength:6 ,maxLength: 20})}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && <p className="text-red-500">minimum 6 charetor</p>}
                {errors.password && <span>minimum 6 charetor</span>}
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover">
                    Login Here?
                  </a>
                </label>
              </div>
          
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sigup</button>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sigup;
