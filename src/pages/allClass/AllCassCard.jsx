import React from "react";
import Card from "../../component/cardHome/Card";

const AllCassCard = ({ addNewClassAdmin }) => {
  const { classs, imgBB, description } = addNewClassAdmin;
  return (
    <div className="flex  flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
      {/*  <!-- Image --> */}
      <figure className="flex-1">
        <img
          src={imgBB}
          alt="card image"
          className="object-cover min-h-full aspect-auto"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="flex-1 p-6 sm:mx-6 sm:px-0">
        <header className="flex gap-4 mb-4">
          <a
            href="#"
            className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
          >
            <img
              src={imgBB}
              alt="user name"
              title="user name"
              width="48"
              height="48"
              className="max-w-full rounded-full"
            />
          </a>
          <div>
            <h3 className="text-xl font-medium text-slate-700">{classs}</h3>
          </div>
        </header>
        <p>
          <p className="text-sm text-slate-400"> {description}</p>
        </p>
      </div>
    </div>
  );
};

export default AllCassCard;
