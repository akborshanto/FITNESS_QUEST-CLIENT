import React, { useEffect } from "react";

import UseButton from "../button/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader requires a loader
import { Link } from "react-router-dom";


export default function UseSlider({ img }) {
/*   useEffect(() => {
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
 */
  return (
    <>
      {/*<!-- Component: Slider with indicators outside --> */}

      <div className="relative h-[250px] md:h-96 lg:h-screen  overflow-hidden">
      <div className="h-full   absolute w-full bg-black/20   z-30">
        <div className="h-full     flex items-center   ">
          <div className="my-auto    bg-opacity-50   text-center mx-auto">
            <div className="max-w-7xl m-auto w-full     space-y-5 lg:p-0 md:p-10 p-5">
              <h1 className="text-white text-center lg:text-7xl md:text-2xl text-2xl z-[10px]  ">
                DISCOVER THE HIDDEN ALTER <br />{" "}
                <span className="outline-text">EGO OF YOUR BODY</span>{" "}
              </h1>
              <div className="text-white lg:text-base text-sm m-auto text-center w-[60%] md:block hidden ">
                {" "}
                Welcome to workout, where the night is not just for sleep;
                it's for sweat, strength, and self-discovery. Step into our
                world of after-hours fitness, where the neon lights guide your
                path to greatness.{" "}
              </div>
              <div>

              {/* all class */}
                <Link to={"/all-trainer"}>
                  <button className=" md:text-base text-sm px-4 p-2 rounded-full border bg-[#007BFF] font-bold border-[#007BFF]  text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                    {" "}
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
   <Carousel className="overflow-hidden w-full"
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        transitionTime={1000}
        emulateTouch
        stopOnHover
        swipeable={false}
        

      >
        <div
          className="h-[250px] md:h-96 lg:h-screen    relative  bg-top bg-cover overflow-hidden "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/qRdnCyp/background-image.png)",
          }}
        >
          <h1 className="lg:block hidden  uppercase text-6xl mt-0 absolute rotate-90 -right-20 outline-text-gym top-1/2  -z-30">
         Fitness Quest
          </h1>
        </div>
        <div
          className="h-full relative  bg-top bg-cover  overflow-hidden"
          style={{
            backgroundImage: "url(https://i.ibb.co/bbHTGYd/footer-bg.jpg)",
          }}
        >
          <h1 className="lg:block hidden  uppercase text-6xl mt-0 absolute rotate-90 -right-20 outline-text-gym top-1/2  -z-30">
         Fitness Quest
          </h1>
        </div>
        <div
          className="h-full relative  bg-top bg-cover overflow-hidden "
          style={{
            backgroundImage: "url(https://i.ibb.co/gw55gCX/hero.jpg)",
          }}
        >
          <h1 className="lg:block hidden  uppercase text-6xl mt-0 absolute rotate-90 -right-20 outline-text-gym top-1/2  -z-30">
         Fitness Quest
          </h1>
        </div>
       
      </Carousel> 
    </div>
      {/*<!-- End Slider with indicators outside --> */}
    </>
  );
}
