import { useState } from 'react'
import { DownIcon } from '../assets/Icons'
import { Data2 } from './Data2'
import { DataBar } from './DataBar'
import FinalChart from './FinalChart'
import BarChart from './BarChart'
const AnalyticPage = () => {
  const [chartData, setChartData] = useState({
    labels: Data2.map((data) => data.month),
    datasets: [
      {
        label: 'Users Gained ',
        data: Data2.map((data) => data.visitors),
        backgroundColor: ['white', 'white', 'white', 'white', 'white'],
        borderColor: 'blue',
        borderWidth: 2,
      },
    ],
  })
  let bigData = 0
  DataBar.map((data) => {
    if (data.visitors > bigData) bigData = data.visitors
    return bigData
  })
  console.log(bigData)
  const [chartData2, setChartData2] = useState({
    labels: DataBar.map((data) => data.time),
    datasets: [
      {
        label: 'Users Gained ',
        data: DataBar.map((data) => data.visitors),

        backgroundColor: ['#cfcccc', '#cfcccc', '#cfcccc', '#cfcccc', '#cfcccc', '#cfcccc'],
        // backgroundColor: () => {
        //   const newData = DataBar.find((data) => data.visitors === bigData)
        //   console.log(bigData)
        //   if (newData) return [`black`]
        //   else return [`gray`]
        // },

        //borderColor: 'blue',
        borderWidth: 1,
      },
    ],
  })

  return (
    <div className='bg-white'>
      <div className=' p-10 pb-7 text-xl font-semibold'>Analytics</div>
      <div className='p-10 bg-slate-100 m-10'>
        <div className='flex relative justify-between '>
          <button className='bg-white rounded-xl p-3 px-8 flex gap-5 font-bold'>
            20 AUG 2023 - 0 DEC 2023 <DownIcon />
          </button>
          <button className='bg-white rounded-xl p-3  px-9 flex  gap-40 font-bold'>
            Operations <DownIcon />
          </button>
        </div>
        <div className='flex justify-between mt-8'>
          <div className='flex gap-10 '>
            <span className='bg-white p-10 rounded-lg'>
              <p>All conversations</p>
              <h3 className=' text-center font-bold text-3xl'>69</h3>
            </span>
            <span className='bg-white p-10 rounded-lg'>
              <p>Handled conversations</p>
              <h3 className=' text-center font-bold text-3xl'>20</h3>
            </span>
            <span className='bg-white p-10 rounded-lg'>
              <p>Missed conversations</p>
              <h3 className=' text-center font-bold text-3xl'>15</h3>
            </span>
          </div>
          <div className='bg-white p-10 px-14 rounded-lg'>
            <p>Conversations Taken over by bot</p>
            <h3 className=' text-center font-bold text-3xl'>0</h3>
          </div>
        </div>
        <div className='flex justify-between mt-20 gap-28 '>
          <div className='w-full bg-white rounded-xl p-7'>
            <FinalChart chartData={chartData} />
          </div>

          <div className=''>
            <BarChart chartData={chartData2} />
          </div>
        </div>
        <div className='p-4 bg-white  my-10 rounded-lg '>
          <div className='flex justify-between'>
            <h3 className=' font-bold'>Top locations for Audience</h3>
            <h3 className=' font-bold flex gap-4'>
              View all <DownIcon />
            </h3>
          </div>

          <div className='px-10 py-3 flex justify-between'>
            <div className='w-48  h-12 rounded-lg bg-zinc-300 p-1'>
              <div className='w-10 h-10 bg-slate-100 rounded-full'></div>
            </div>
            <div className='w-48  h-12 rounded-lg bg-zinc-300 p-1'>
              <div className='w-10 h-10 bg-slate-100 rounded-full'></div>
            </div>
            <div className='w-48  h-12 rounded-lg bg-zinc-300 p-1'>
              <div className='w-10 h-10 bg-slate-100 rounded-full'></div>
            </div>
            <div className='w-48  h-12 rounded-lg bg-zinc-300 p-1'>
              <div className='w-10 h-10 bg-slate-100 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AnalyticPage
