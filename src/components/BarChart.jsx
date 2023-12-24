import { Bar } from 'react-chartjs-2'

const BarChart = ({ chartData }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className='font-bold text-lg m-2'>Conversation Durations</h2>
      <h3 className='font-bold text-lg m-2 text-gray-500'>On Average</h3>
      <h3 className='font-bold  m-2 text-2xl text-gray-600'>10 hrs</h3>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: 'Users Gained between 2016-2020',
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { display: false } },
          },
        }}
      />
    </div>
  )
}
export default BarChart
