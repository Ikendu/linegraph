const Summary = () => {
  return (
    <div className='all-summary grid grid-cols-2 gap-4  p-10 px-52'>
      <EachSummary topic={`Visitors`} count={10} percent={30} />
      <EachSummary topic={`Chats`} count={3} percent={30} />
      <EachSummary topic={`Page View`} count={20} percent={30} />
      <EachSummary topic={`Reporting`} count={0} percent={30} />
    </div>
  )
}

const EachSummary = ({ topic, count, percent }) => {
  return (
    <div className='summary w-full rounded-lg shadow-lg shadow-slate-50'>
      <h4 className=' font-extrabold text-lg text-slate-700 mb-10'>{topic}</h4>
      <div className='grid grid-cols-2 gap-10'>
        <div className='p-10 bg-slate-200 py-14 rounded-md'>
          <p className='text-4xl font-bold text-center '>{count}</p>
        </div>
        <div>
          <p className=' mb-6'>Today</p>
          <p className=' text-blue-700'>{percent}%</p>
          <p className='font-bold'>Last 7 days</p>
        </div>
      </div>
    </div>
  )
}
export default Summary
