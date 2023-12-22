import { DownIcon } from '../assets/Icons'

const AnalyticPage = () => {
  return (
    <div className='bg-white'>
      <div className=' p-10 pb-7 text-xl font-semibold'>Analytics</div>
      <div className='p-10 bg-slate-100 m-10'>
        <div className='flex relative justify-between '>
          <button className='bg-white rounded-xl p-3 px-6 flex gap-3'>
            20 AUG 2023 - 0 DEC 2023 <DownIcon />
          </button>
          <button className='bg-white rounded-xl p-3 px-6 flex gap-28'>
            Operations <DownIcon />
          </button>
        </div>
        <div className='flex justify-between mt-8'>
          <div className='flex gap-10 '>
            <span>
              <p>All conversations</p>
              <h3></h3>
            </span>
            <span>
              <p>All conversations</p>
              <h3></h3>
            </span>
            <span>
              <p>All conversations</p>
              <h3></h3>
            </span>
          </div>
          <div>
            <p>All conversations</p>
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AnalyticPage
