import React from 'react'

const Feture = () => {
  return (
    <div>
    <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200">
    {/*  <!-- Icon --> */}
    <figure className="p-6 pb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 mx-auto stroke-emerald-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
        role="graphics-symbol"
        aria-labelledby="title-01 desc-01"
      >
        <title id="title-01">Icon title</title>
        <desc id="desc-01">A more detailed description of the icon</desc>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    </figure>
    {/*  <!-- Body--> */}
    <div className="p-6">
      <h3 className="mb-4 text-xl font-medium text-slate-700">Bonus</h3>
      <p>
        All components come with proper attributes to ensure full
        accessibility with the WAI-ARIA standards. Web accessibility means
        that websites, tools, and technologies are designed and developed so
        that people with disabilities can use them.
      </p>
    </div>
  </div>
    </div>
  )
}

export default Feture
