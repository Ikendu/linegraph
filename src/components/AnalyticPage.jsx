import { DownIcon } from '../assets/Icons'

const AnalyticPage = () => {
  return (
    <div className='bg-white'>
      <div className=' p-10 pb-7 text-xl font-semibold'>Analytics</div>
      <div className='p-10 bg-slate-100 m-10'>
        <div className='flex relative justify-between '>
          <button className='bg-white rounded-xl p-3 px-8 flex gap-5 font-bold'>
            20 AUG 2023 - 0 DEC 2023 <DownIcon />
          </button>
          <button className='bg-white rounded-xl p-3 px-6 flex gap-32 font-bold'>
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
          <div className='bg-white p-10 rounded-lg'>
            <p>Conversations Taken over by bot</p>
            <h3 className=' text-center font-bold text-3xl'>0</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AnalyticPage
