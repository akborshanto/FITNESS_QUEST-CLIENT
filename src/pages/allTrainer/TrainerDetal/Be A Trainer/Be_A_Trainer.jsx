import React from "react";
import { Link } from "react-router-dom";
import UseButton from "../../../../component/button/Button";

const Be_A_Trainer = () => {
  return (
    <div>
      BE A TRAIENR
      {/*<!-- Component: Large outline button with trailing icon  --> */}
 




     <section class="bg-white dark:bg-gray-900">
     <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
         <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
             Bring your Business to the <span class="text-blue-500">next level.</span>
         </h2>
 
         <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
             Lorem, ipsum dolor sit amet consectetur
             adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
             explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
         </p>
 
         <div class="inline-flex w-full mt-6 sm:w-auto">
         <Link to='/become-trainer'>

             
<UseButton btnHeading="Become A Trainer"></UseButton>

         </Link>


         </div>
     </div>
 </section>






    </div>
  );
};

export default Be_A_Trainer;
