import React from 'react'
import useAllTrainer from '../../../../hook/useAllTrainer'
import ActivityTaable from './ActivityTaable'

const ActivateLog = () => {
  const [data]=useAllTrainer()



  return (
    <div>
   <div className="w-full overflow-x-auto">
          <table
            className="w-full text-left border-collapse rounded w-overflow-x-auto "
            cellspacing="0"
          >
            <tbody>
              <tr className="border-b border-slate-300">
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Username
                </th>
              </tr>
              {/* MASPING */}
              <tr>
                {data?.map((activity) => (
          
                  <ActivityTaable activity={activity}></ActivityTaable>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ActivateLog
