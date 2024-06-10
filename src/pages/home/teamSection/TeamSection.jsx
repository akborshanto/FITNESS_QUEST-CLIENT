import React from "react";
import useAllTrainer from "../../../hook/useAllTrainer";
import UseTitle from "../../../hook/useTitle";

const TeamSection = () => {
  const [data] = useAllTrainer();
  // const allBecomeTrainerInfo = {
  //   name,
  //   email,
  //   age,
  //   day,
  //   time,
  //   imgBB,
  //   skills,
  //   status,
  //   trainerRole,
  //   experience
  // };
  return (
    <div>
      <UseTitle
        heading="OUR  TEAM"
        description={
          " team trainer is a professional who teaches and develops the skills of employees to increase operational efficiency and maximize productivity"
        }
      ></UseTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  justify-items-center my-8">
        {data?.slice(0, 3).map((trainer) => (
          <div class="flex w-[300px] flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
            <img
              class="object-cover w-full rounded-xl aspect-square h-[250px]"
              src={trainer?.imgBB}
            />

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-black">

            </h1>

            <p class="mt-2 text-gray-500 capitalize dark:text-black">
             {trainer.name}
             
            </p>

            <div class="flex mt-3 -mx-2">
            <p class="mt-2 text-gray-500 capitalize dark:text-black">
          Experience:  {trainer.experience}
            
           </p>
            <p class="mt-2 text-gray-500 capitalize dark:text-black">
          Age:  {trainer.age}
            
           </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
