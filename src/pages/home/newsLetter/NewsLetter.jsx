import React from "react";
import UseButton from "../../../component/button/Button";
import useAxiosSecure from "../../../AxiosSecure/AxiosSecure";

const NewsLetter = () => {
const axiosSecure=useAxiosSecure()
const handleSubmit=async(e)=>{
  e.preventDefault()
  const form=e.target;
  const name=form.name.value;
  const email=form.email.value;
  const userInfo={
    name,email

  }

  /* user axios secure */
  const {data}=await axiosSecure.post('/newsLetter',userInfo)
  console.log(data)




}

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-3xl px-6 py-16 mx-auto text-center">
          <h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">
       NEWS LETTER
          </h1>
          <p class="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, minus tempora nemo quos
          </p>

         <form action="" onSubmit={handleSubmit}>
         <div class="">
         <div>
           <label
             for="name"
             class="block text-sm text-gray-500 dark:text-gray-300"
           >
             Name 
           </label>

           <input
             type="text"
             name="name"
             placeholder="Your Name"
             class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
           />

      
         </div>
         <div>
           <label
             for="email"
             class="block text-sm text-gray-500 dark:text-gray-300"
           >
             Email 
           </label>

           <input
             type="email"
             name="email"
             placeholder="Your Email..."
             class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
           />

        
         </div>
       </div>
       <UseButton btnHeading="SUBSCRIBE NOW"></UseButton>
         </form>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
