import React from 'react'
import UseButton from '../../../component/button/Button'
import { Link } from 'react-router-dom'

const TrainerDetailCard = () => {
  return (
    <div>
    <header class="bg-white text-black">
  
    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold tracking-wide text-black dark:text-white lg:text-4xl">Find your premium new glasses exported from US</h1>
                <p class="mt-4 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                <div class="grid gap-6 mt-8 sm:grid-cols-2">
                    <div class="flex items-center text-gray-800 -px-3 -200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Premium selection</span>
                    </div>

                    <div class="flex items-center  -px-3 -200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Insurance</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 -200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">All legal documents</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 -200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">From US glasses dealers</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 -200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Payment Security</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 -200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Fast shipping (+ Express)</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2
        ">
          

        <h1>AVAILABLEW SLOT</h1>
      <Link to='/trainer-booking'>
      <UseButton btnHeading="Available Slot"></UseButton>
      </Link>
        </div>
    </div>
</header>
    </div>
  )
}

export default TrainerDetailCard
