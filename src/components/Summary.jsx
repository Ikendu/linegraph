const Summary = () => {
  return (
    <div className='all-summary grid grid-cols-2 gap-4  -mx-5 '>
      <div className='summary w-full rounded-xl'>
        <h4 className=' font-extrabold text-lg text-slate-700 mb-10'>Visitors</h4>
        <div className='grid grid-cols-2 gap-10'>
          <div className='p-10 bg-slate-200 py-14 rounded-md'>
            <p className='text-4xl font-bold text-center '>2</p>
          </div>
          <div>
            <p className=' mb-6'>Today</p>
            <p className=' text-blue-700'>{0}%</p>
            <p className='font-bold'>Last 7 days</p>
          </div>
        </div>
      </div>
      <div className='summary w-full rounded-xl'>
        <h4 className=' font-extrabold text-lg text-slate-700 mb-10'>Visitors</h4>
        <div className='grid grid-cols-2 gap-10'>
          <div className='p-10 bg-slate-200 py-14 rounded-md'>
            <p className='text-4xl font-bold text-center '>3</p>
          </div>
          <div>
            <p className=' mb-6'>Today</p>
            <p className=' text-blue-700'>{0}%</p>
            <p className='font-bold'>Last 7 days</p>
          </div>
        </div>
      </div>
      <div className='summary w-full rounded-xl'>
        <h4 className=' font-extrabold text-lg text-slate-700 mb-10'>Visitors</h4>
        <div className='grid grid-cols-2 gap-10'>
          <div className='p-10 bg-slate-200 py-14 rounded-md'>
            <p className='text-4xl font-bold text-center '>0</p>
          </div>
          <div>
            <p className=' mb-6'>Today</p>
            <p className=' text-blue-700'>{0}%</p>
            <p className='font-bold'>Last 7 days</p>
          </div>
        </div>
      </div>
      <div className='summary w-full rounded-xl'>
        <h4 className=' font-extrabold text-lg text-slate-700 mb-10'>Visitors</h4>
        <div className='grid grid-cols-2 gap-10'>
          <div className='p-10 bg-slate-200 py-14 rounded-md'>
            <p className='text-4xl font-bold text-center '>2</p>
          </div>
          <div>
            <p className=' mb-6'>Today</p>
            <p className=' text-blue-700'>{0}%</p>
            <p className='font-bold'>Last 7 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Summary
