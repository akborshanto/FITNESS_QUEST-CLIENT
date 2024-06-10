import React, { useEffect } from "react";

import UseButton from "../button/Button";
import { Link } from "react-router-dom";

import Glide from "@glidejs/glide";
import { Heading } from '@chakra-ui/react';

export default function UseSlider({ img }) {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Slider with indicators outside --> */}

      <div className="relative w-full glide-01">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul
            className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden]
         [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0"
          >
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
                        ALL CLASS
                      </h1>
                    </h1>
                    <br />

                    <h1>
                      {" "}
                      GoodLife Fitness's membership will give you access to
                      Virtual Fitness Classes, cardio, strength, training, and
                      mind and body classes.
                    </h1>
                  <Link to='/all-class' className="my-4">  <UseButton btnHeading={'Class'}></UseButton></Link>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <div
                className="hero min-h-screen my-8"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-photo/couple-training-together-gym_1303-26968.jpg?t=st=1717952542~exp=1717956142~hmac=d8cf333b242ad8839863d3d7aabf0dc9d93a6b58bb8187425445b426fd73a538&w=900)",
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
                          ALL CLASS
                        </h1>
                      </h1>
                      <br />
                      
                      <h2 className="my-4">   GoodLife Fitness's membership will give you access to
                      Virtual Fitness Classes, cardio, strength, training,
                      and mind and body classes.</h2>
                      <Link to="/all-class">
                  <UseButton btnHeading={"CLASS "}></UseButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with indicators outside --> */}
    </>
  );
}
