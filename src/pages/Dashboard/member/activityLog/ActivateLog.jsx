import React from 'react'
import useAllTrainer from '../../../../hook/useAllTrainer'
import ActivityTaable from './ActivityTaable'
import { FaRegEye } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import UseButton from '../../../../component/button/Button';
import toast from 'react-hot-toast';
import useAppliedTrainer from '../../../../hook/appliedTrainer';
const ActivateLog = () => {
  const [data]=useAppliedTrainer()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    console.log(feedback);
try{

toast.success("thanck for feedback")
// axiosSecure.patch(`/feedback/${_id}`,{feedback})
// .then(res=>{
//   console.log(res.data)
//   toast.success("Thandls for Feedback")
// })

}catch(err){
  console.log(err)
}}
  return (
    <div>

    <section class="container px-4 mx-auto">
    <div class="flex items-center gap-x-3">
      <h2 class="text-lg font-medium text-gray-800 dark:text-white">
     ALL TRAINER
      </h2>

     
    </div>

    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <div class="flex items-center gap-x-3">
                      <span>Name</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <button class="flex items-center gap-x-2">
                      <span>Status</span>

                      <svg
                        class="h-3"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.1"
                        />
                        <path
                          d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.1"
                        />
                        <path
                          d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="0.3"
                        />
                      </svg>
                    </button>
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <button class="flex items-center gap-x-2">
                      <span>Age</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                        />
                      </svg>
                    </button>
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Email address
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Details
                  </th>

                  <th scope="col" class="relative py-3.5 px-4">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {data?.map((trainer) => (
                  <tr>
                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                        />

                        <div class="flex items-center gap-x-2">
                          <img
                            class="object-cover w-10 h-10 rounded-full"
                            src={trainer?.imgBB}
                            alt=""
                          />
                          <div>
                            <h2 class="font-medium text-gray-800 dark:text-white ">
                              {trainer?.name}
                            </h2>
                            <p class="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
             
                        <h2 class="text-sm font-normal text-emerald-500">
                      {trainer?.status  === "pending" ? trainer?.status  :             <Button onClick={onOpen}> <FaRegEye className=' text-2xl  text-blue-500' /></Button>
                    }
         
                        </h2>
                      </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                     {trainer?.age}
                    </td>
                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <p>{trainer?.email}</p>
                    </td>
                    <td class="px-4 py-4 text-sm whitespace-nowrap"></td>
                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                      <div class="flex items-center gap-x-6">
                        <button class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-green-300 disabled: hover:text-red-500 focus:outline-none">
                    
                        <span>Enable</span>
                        </button>

                     
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
 
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Give Your Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={handleFeedback}>
          <textarea
            id="id-b02"
            type="text"
            name="feedback"
            rows="3"
            placeholder="Write your message"
            className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          ></textarea>

          <UseButton btnHeading="Submit"></UseButton>
        </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ActivateLog
