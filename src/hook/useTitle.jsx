import React from "react";

const UseTitle = ({heading,description}) => {
  return (
    <div className="text-center my-6">
      <h1 className="text-3xl font-bold font-serif">{heading}</h1>
      <p className="text-bold my-3  font-sans ">{description}</p>
    </div>
  );
};

export default UseTitle;
