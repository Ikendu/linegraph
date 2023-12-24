import { Line } from 'react-chartjs-2'
import { DownIcon, PlusIcon } from '../assets/Icons'

const FinalChart = ({ chartData }) => {
  return (
    <div>
      <div className='grid grid-cols-2 '>
        <p className=''>
          Conversation Analytics <DownIcon />
        </p>
        <div className='flex justify-between center items-center'>
          <span className='text-lg text-xl text-gray-600 font-semibold'>12 Months</span>
          <span className='text-lg text-xl text-gray-600 font-semibold'>30 Days</span>
          <span className='text-lg text-xl text-gray-600 font-semibold'>7 Days</span>
          <span>
            <PlusIcon />
          </span>{' '}
        </div>
      </div>
      <Line
        data={chartData}
        options={{
          tension: 0.4,
          pointRadius: 0,
          plugins: {
            title: {
              display: true,
            },
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
