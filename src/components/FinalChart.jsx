import { Line } from 'react-chartjs-2'
import { DownIcon, PlusIcon } from '../assets/Icons'

const FinalChart = ({ chartData }) => {
  return (
    <div>
      <div className='grid grid-cols-2 '>
        <p className=''>
          Conversation Analytics <DownIcon />
        </p>
        <div className='flex justify-between'>
          <span>12 Months</span>
          <span>30 Days</span>
          <span>7 Days</span>
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
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              ticks: {
                maxTicksLimit: 8,
              },
            },
          },
        }}
      />
    </div>
  )
}
export default FinalChart
