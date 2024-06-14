import React from "react";
import { Link } from "react-router-dom";
import UseButton from "../../../../component/button/Button";
import UseTitle from "../../../../hook/useTitle";

const Be_A_Trainer = () => {
  return (
    <div>

<UseTitle heading={'TO BE A TRAINER'} description={'The nature of the job requires multitasking skills, a varied knowledge base, creativity, and communication abilities to be effective'}></UseTitle>
    <div
    className="hero min-h-screen my-8"
    style={{
      backgroundImage:
        "url(https://img.freepik.com/free-photo/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-his-upper-body-concept-healthy-lifestyle-sport-fitness-bodybuilding-wellbeing_155003-27879.jpg?t=st=1717952545~exp=1717956145~hmac=94e045195c58d14a6ca3dba03328b2772b1378446f39f01460ef5f1a1c477723&w=900)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        {/*       <h1 className="mb-5 text-5xl font-bold">MALAYSIA</h1>
<p className="mb-5">Malaysia represents fantastic value for money at almost all levels. Costs for food, lodging, fuel and internal transportation are very reasonable.</p>
*/}{" "}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            <h1 className="font-bold text-2xl lg:text-4xl">
              {" "}
              <Link to='/become-trainer'>

             
              <button

              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
              BE COME A TRAINER
              </button>
              
                       </Link>
              
            </h1>
          </h1>
          <br />

          <h1>
            {" "}
            GoodLife Fitness's membership will give you access to
            Virtual Fitness Classes, cardio, strength, training, and
            mind and body classes.
          </h1>
  
        </div>
      </div>
    </div>
  </div>






    </div>
  );
};

export default Be_A_Trainer;
