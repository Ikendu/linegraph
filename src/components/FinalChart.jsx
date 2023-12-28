import { Line } from 'react-chartjs-2'
import { DownIcon, PlusIcon } from '../assets/Icons'
import { useState } from 'react'

const stlye = 'text-lg text-lg text-gray-600 font-semibold p-3 px-4'
//const newStyle = 'text-lg text-xl text-gray-600 font-semibold p-3 px-4 bg-blue-500'
const FinalChart = ({ chartData }) => {
  return (
    <div className='px-2 '>
      <div className='grid grid-cols-2 items-center'>
        <p className='flex gap-2'>
          Conversation Analytics <DownIcon />
        </p>
        <div className='flex justify-between items-center'>
          <span className={stlye}>12 Months</span>
          <span className={stlye}>30 Days</span>
          <span className={stlye}>7 Days</span>
          <span>
            <PlusIcon />
          </span>{' '}
        </div>
      </div>
      <Line
        data={chartData}
        options={{
          //maintainAspectRatio: false,
          tension: 0.4,
          pointRadius: 0,

          elements: {
            point: { hoverRadius: 10, hoverBackgroundColor: `green`, hoverBorderColor: `green` },
          },
          hover: { mode: `index`, intersect: false },
          plugins: {
            title: { display: true },
            legend: { display: false },
          },
          scales: {
            x: {
              ticks: { maxTicksLimit: 12 },
              grid: { display: false },
            },
            y: {
              ticks: { maxTicksLimit: 8, display: false },
              border: { display: false },
            },
          },
        }}
      />
    </div>
  )
}
export default FinalChart
