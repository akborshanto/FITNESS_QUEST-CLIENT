import React from 'react'
import UseTitle from '../../../hook/useTitle'

const About = () => {
  return (
    <div className='my-8'>
    <UseTitle heading={"ABOUT TRAINER"} description='It is the learners needs, peculiarities, and objectives that trainers have in focus – not giving lectures '> </UseTitle>
    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="xl:flex xl:items-center xL:-mx-4">
            <div class="xl:w-1/2 xl:mx-4">
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">About Trainer Quest</h1>

                <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                Physical activity or exercise can improve your health and reduce the risk of developing several diseases like type 2 diabetes, cancer and cardiovascular disease. Physical activity and exercise can have immediate and long-term health benefits.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                <div>
                    <img class="object-cover rounded-xl aspect-square" src="https://img.freepik.com/free-photo/human-body_1048-4737.jpg?t=st=1717955868~exp=1717959468~hmac=b16ceae593b7094f8dacfddaa4e5ae6bbc821e7cc93bbd8d9be0a8065e3d7a4f&w=826" alt=""/>

           
                </div>

                <div>
                    <img class="object-cover rounded-xl aspect-square" src="https://img.freepik.com/free-vector/set-gym-elements-creating-your-own-badges-logos-labels-posters-etc_1284-44675.jpg?t=st=1717955771~exp=1717959371~hmac=f0ae8b73de2a064ebccfd980deba12e5ed473d2609f37267fcbf9ff3f8e7639c&w=740" alt=""/>

                  
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default About
