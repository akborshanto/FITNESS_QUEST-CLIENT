import { Link, useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../AxiosSecure/AxiosSecure";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../auth/Auth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Loading from "../../component/Loading/Loading";
const Login = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const {register,handleSubmit}=useForm()
  const from = location.state?.from?.pathname || "/";
  const { GoogleLogin, Login,loading } = useAuth();

  
const onSubmit=(data,e)=>{
  Login(data.email,data.password)
.then((result)=>{
toast.success("Login successful")
e.target.reset()
navigate(location?.state ? location.state:"/")

})
.catch((error)=>{
  console.log(error)
})


}


  const googleLogin = () => {
    GoogleLogin()
.then((res)=>{

  toast.success("Successfully Google logged in")
  navigate(location?.state ? location.state:"/")
})

  }
// if(loading){

//   return <Loading></Loading>
// }
  return (
    <div>

    <div
    style={{
      backgroundImage:
        "Url(https://themewagon.github.io/gymlife/img/gallery/gallery-6.jpg)",
    }}
    className="bg-cover bg-center min-h-screen p-10"
  >

    <div className="md:flex h-full w-full justify-center container m-auto">
      <div className="">
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="md:w-[40vw] w-full bg-black bg-opacity-40 backdrop-blur-md duration-500 text-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                  Sign in to your account
                </h1>
                <form
                onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
              
                    type="email"
    {...register("email")}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Enter your email"
                    />
         {/*            {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )} */}
                  </div>
                  <div>
                    <label
                  
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                      name="password"
                        id="password"
            {...register("password")}
                        placeholder="Enter a strong password"
                        className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  
                        autoComplete="current-password" // Added autocomplete attribute
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <button
                          type="button" // Ensure this button does not submit the form
                          onClick={googleLogin}
                          className="text-black hover:text-gray-700 focus:outline-none"
                        >
                  
                        </button>
                      </div>
                    </div>

             {/*        {errors.password && (
                      <span className="text-red-500">Password is required</span>
                    )} */}
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-bold bg-[#007BFF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 headline1 rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Login
                  </button>
                </form>
                <div onClick={googleLogin} className=" cursor-pointer text-4xl text-center flex justify-center  items-center">
                <FcGoogle />
                <span className="text-2xl">oogle</span>
                </div>
            {/*     <Googlebtn />  */}
                <div className="text-sm font-light text-white">
                  Don’t have an account yet?
                  <Link
                   to="/register"
                    className="font-medium text-info ml-1 hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
    </div>

  );
};

export default Login;
