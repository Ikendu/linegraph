import './App.css'
import AnalyticPage from './components/AnalyticPage'
// import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import Summary from './components/Summary'

function App() {
  return (
    <div className=' bg-slate-50'>
      <div className='page'>
        {/* <SideBar /> */}
        <Dashboard />
      </div>
      <Summary />
      <AnalyticPage />
    </div>
  )
}

export default App
