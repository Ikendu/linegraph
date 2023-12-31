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
        //backgroundColor: ['blue', 'transparent'],
        backgroundColor: (context) => {
          const bgColor = [`blue`, `blue`, `transparent`]
          if (!context.chart.chartArea) return
          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart
          const bgGradient = ctx.createLinearGradient(0, top, 0, bottom)
          bgGradient.addColorStop(0, bgColor[0])
          bgGradient.addColorStop(0.7, bgColor[2])
          return bgGradient
        },
        borderColor: 'blue',
        borderWidth: 2,
        fill: true,
      },
    ],
  })
  let bigData = 0
  let highColor = []
  DataBar.map((data) => {
    if (data.visitors > bigData) bigData = data.visitors
  })

  DataBar.map((data) => {
    if (data.visitors === bigData) highColor.push(`blue`)
    else highColor.push(`#c9c4c4`)
  })

  const [chartData2] = useState({
    labels: DataBar.map((data) => data.time),
    datasets: [
      {
        label: 'Users Gained ',
        data: DataBar.map((data) => data.visitors),
        backgroundColor: highColor,
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
            <Analysis topic={`All conversations`} count={70} />
            <Analysis topic={`Handled conversations`} count={50} />
            <Analysis topic={`Missed conversations`} count={20} />
          </div>
          <div className='bg-white p-10 px-14 rounded-lg'>
            <p>Conversations Taken over by bot</p>
            <h3 className=' text-center font-bold text-3xl'>0</h3>
          </div>
        </div>
        <div className='flex justify-between mt-20 gap-24 '>
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
            <TopLocations />
            <TopLocations />
            <TopLocations />
            <TopLocations />
          </div>
        </div>
      </div>
    </div>
  )
}
const TopLocations = () => {
  return (
    <div className='w-48  h-12 rounded-lg bg-zinc-300 p-1'>
      <div className='w-10 h-10 bg-slate-100 rounded-full'></div>
    </div>
  )
}

const Analysis = ({ topic, count }) => {
  return (
    <span className='bg-white p-10 rounded-lg'>
      <p>{topic}</p>
      <h3 className=' text-center font-bold text-3xl'>{count}</h3>
    </span>
  )
}
export default AnalyticPage
