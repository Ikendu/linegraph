import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { useState } from 'react'
import { Data } from './Data'
import VisitorsChart from './VisitorsChart'
import Summary from './Summary'

//import './styles.css'

Chart.register(CategoryScale)

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: 'Users Gained ',
        data: Data.map((data) => data.visitors),
        backgroundColor: ['white', 'white', 'white', 'white', 'white'],
        borderColor: 'blue',
        borderWidth: 2,
      },
    ],
  })

  return (
    <>
      <div className='board bg-white m-20 m-auto mt-16'>
        <p>Live Visitors</p>
        <VisitorsChart chartData={chartData} />
      </div>
    </>
  )
}
export default Dashboard
