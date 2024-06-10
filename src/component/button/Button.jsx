import React from 'react'

const UseButton = ({btnHeading}) => {
  return (
    <div>

    <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-[#1E90FF]  px-6 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-black disabled:shadow-none">
    <span>{btnHeading}</span>
  </button>
    </div>
  )
}

export default UseButton
