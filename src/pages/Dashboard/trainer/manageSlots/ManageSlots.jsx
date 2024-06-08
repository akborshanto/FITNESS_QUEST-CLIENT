import React from 'react'
import useTrainerBooking from '../../../../hook/useTrainerBooking'
import TrainerTableRow from './TrainerTableRow'
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../../../../AxiosSecure/AxiosSecure'
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2'

const ManageSlots = () => {
const axiosSecure=useAxiosSecure()
const [allTrainerClass,refetch]=useTrainerBooking()

const {mutateAsync}=useMutation({

mutationFn:async (id)=>{
  const data=await axiosSecure.delete(`/manageSlot/${id}`)

  return data
}

})


const deleteSlot=async(id)=>{

  
  const {data}=await mutateAsync(id)

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    

    if(data.deletedCount >0){




  
      toast.success("succefully dele")
      refetch()
    }








  });







  
}
  return (
    <div>

    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
    <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
    <div className="overflow-x-auto">
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <colgroup>
          <col className="w-5" />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="w-5" />
        </colgroup>
        <thead>
          <tr className="dark:bg-gray-300">
            <th className="p-3">Profile</th>
            <th className="p-3">Name</th>
            <th className="p-3">Skills</th>
            <th className="p-3">Time</th>
            <th className="p-3">Email</th>
            <th className="p-3">Delete</th>
          </tr>
        </thead>


        {/*   filter(member=> member.role === "trainer") */}
          
          
        {allTrainerClass?.map((trainer) => (
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">

<tr>
      
<TrainerTableRow allBookingSlot={trainer} deleteSlot={deleteSlot}></TrainerTableRow>
</tr>


    
          </tbody>
        ))}
      </table>
    </div>
  </div>


    </div>
  )
}

export default ManageSlots
