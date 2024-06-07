import React from 'react'

const AllTrainerAdmin = ({handleUpdate,trainer,handleFeedback,handleReject}) => {
  return (
<div>

<div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {item ? (
          <>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>

</div>
  )
}

export default AllTrainerAdminModal
// <div>
// <dialog id="my_modal_3" className="modal">
// <div className="modal-box">
//   <form method="dialog">
//     {/* if there is a button in form, it will close the modal */}
//     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//       ✕
//     </button>
//   </form>
//   {/*  <!-- Body--> */}
//   <div className="p-6">
//     <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[300px] h-auto">
//       {/*  <!-- Image --> */}
//       <figure>
//         <img
//           src=""
//           alt="card image"
//           className="aspect-video w-full"
//         />
//       </figure>
//       {/*  <!-- Body--> */}
//       <div className="p-6">
//         <header className="mb-4">
//           <h3 className="text-xl font-medium text-slate-700">
//             Greek breakfast
//           </h3>
//           <p className=" text-slate-400"> $8.99</p>
//         </header>
//         <p>
//           Blueberry Superpower: Vanilla Greek Yogurt +
//           Fresh Blueberries + Granola + Honey.
//         </p>
//       </div>
//       {/*  <!-- Action base sized basic button --> */}
//     </div>
//   </div>

//   <div className="flex justify-between">
//     <button
//       onClick={handleUpdate}
//       className="btn btn-danger"
//     >
//       {" "}
//       Confirm
//     </button>

//     {/*  ==================================== REJECT MODAL===============================================*/}

//     <button
//       className="btn"
//       onClick={() =>
//         document
//           .getElementById("my_modal_5")
//           .showModal()
//       }
//     >
//       <button onClick={() => handleReject()}>
//         Reject
//       </button>
//     </button>
//     <dialog
//       id="my_modal_5"
//       className="modal modal-bottom sm:modal-middle"
//     >
//       <div className="modal-box">
//         <h3 className="font-bold text-lg">Hello!</h3>
//         <p className="py-4">
//           Press ESC key or click the button below to
//           close
//         </p>
//         <div className="modal-action">
//           <form
//             method="dialog"
//             onSubmit={handleFeedback}
//           >
//             {/*<!-- Component: User profile card --> */}
//             <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
//               {/*  <!-- Image --> */}
//               <figure className="p-6 pb-0">
//                 <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
//                   <img
//                     src="asdfasf"
//                     alt="user name"
//                     title="user name"
//                     width="80"
//                     height="80"
//                     className="max-w-full rounded-full"
//                   />
//                 </span>
//               </figure>
//               {/*  <!-- Body--> */}
//               <div className="p-6">
//                 <header className="mb-4">
//                   <h3 className="text-xl font-medium text-slate-700">
//                     Nichole Jones
//                   </h3>
//                   <p className=" text-slate-400">
//                     Senior Designer
//                   </p>
//                 </header>
//               </div>
//               {/*  <!-- Action base sized with lead icon buttons  --> */}
//               <div className="flex justify-end gap-2 p-6 pt-0">
//                 <div className="relative">
//                   <textarea
//                     id="id-b02"
//                     type="text"
//                     name="feedback"
//                     rows="3"
//                     placeholder="Write your message"
//                     className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
//                   ></textarea>
//                   <label
//                     for="id-b02"
//                     className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
//                   >
//                     Write your FeedBack
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <button className="btn btn-info">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </dialog>
//   </div>
// </div>
// </dialog>
// </div>