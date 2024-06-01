import React from "react";
import { Link } from "react-router-dom";

const Be_A_Trainer = () => {
  return (
    <div>
      BE A TRAIENR
      {/*<!-- Component: Large outline button with trailing icon  --> */}
     <Link to='/become-trainer'>

      {/*<!-- Component: Large outline button with trailing icon  --> */}
      <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-emerald-500 px-6 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
        <span>Become A Trailor</span>
        <span className="relative only:-mx-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            role="graphics-symbol"
            aria-labelledby="title-63 desc-63"
          >
            <title id="title-63">Icon title</title>
            <desc id="desc-63">A more detailed description of the icon</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </span>
      </button>
      {/*<!-- End Large outline button with trailing icon  --> */}


     </Link>
      











    </div>
  );
};

export default Be_A_Trainer;
