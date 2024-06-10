import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const TableDataRowAdmin = ({ trainer,TrainerSingleData }) => {

  return (
    <div>
 <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-600 my-6">
                  <a
                    href="#"
                    class="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full"
                  >
                    <img src={trainer?.imgBB} alt="" />
                  </a>
                </td>
                <td className="px-3 py-2">
                  <p>{trainer?.name}</p>
                </td>
                
                <td className="px-3 py-2">
                  <p>{trainer?.time}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{trainer.email}</p>
<p>{trainer?.role}</p>

                                  </td>
                <td className="px-3 py-2">


                  <button   className="text-green-400">Enable </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
              </tr>



























        <td className="px-3 text-2xl font-medium dark:text-gray-600">
    <a
      href="#"
      class="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full"
    >
      <img src={trainer?.imgBB} alt="" />
    </a>
  </td>
  <td className="px-3 py-2">
    <p>{trainer?.name}</p>
  </td>
  <td className="px-3 py-2">
    <span>{trainer?.skills?.business}</span>

    <p className="dark:text-gray-600">White Wolf Brews</p>
  </td>
  <td className="px-3 py-2">
    <p>{trainer?.time}</p>
  </td>
  <td className="px-3 py-2">
    <p>{trainer.status}</p>
  </td>
  <td className="px-3 py-2">
    <p>{trainer.role}</p>
  </td>
  <td className="px-3 py-2">
<Link to={`/dashboard/singelApplied/${trainer?._id}`}>
 <FaEye className="text-2xl " ></FaEye>
{/*      <FaEye className="text-2xl "  onClick={()=>TrainerSingleData(trainer?._id)}></FaEye>

   */}
</Link>"

 
  </td>

    
    </div>
  );
};

export default TableDataRowAdmin;
