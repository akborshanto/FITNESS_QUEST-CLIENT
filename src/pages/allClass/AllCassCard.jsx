import React from 'react'
import Card from '../../component/cardHome/Card'

const AllCassCard = () => {
  return (
    <div className='my-8 '>
    <div class="relative max-w-sm mx-auto mt-20 text-center bg-white rounded shadow-lg group shadow-slate-20 text-slate-500 lg:max-md-full">
    <img src="" alt="emerald" class="absolute left-1/2 block w-32 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_16px_16px_#84cc1650] group-hover:-translate-y-2/3 transition-transform duration-700" />
    <div class="flex flex-col">
      <header class="flex flex-col gap-6 p-6 pt-28 text-slate-400">
        <h3 class="text-xl font-medium uppercase text-emerald-500">Emerald</h3>
      </header>
      <div class="w-3 h-3 mx-auto rounded-full bg-emerald-500"></div>
      <div class="p-6">
        <ul class="space-y-4">
          <li class="w-full gap-2">1 public project</li>
          <li class="w-full gap-2">public working space</li>
          <li class="w-full gap-2">unlimited pages</li>
          <li class="w-full gap-2">5 revisions</li>
        </ul>
      </div>
      <footer>
        <button class="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 translate-y-1/2 rounded shadow-xl whitespace-nowrap bg-emerald-500 shadow-emerald-100 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none"><span>Start now</span>- <span>$0</span></button>
      </footer>
    </div>
  </div>
    </div>
  )
}

export default AllCassCard
