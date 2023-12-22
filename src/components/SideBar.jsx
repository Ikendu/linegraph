import { useState } from 'react'

const SideBar = () => {
  return (
    <div className=' bg-white'>
      <div className='side-bar  py-20'>
        <button>Dashboard</button>
        <button>Inbox</button>
        <button>Agents</button>
        <button>Contact</button>
        <button>Notification</button>
        <button>Setting</button>
      </div>
      <div className='grid grid-cols-2  ml-7 mr-4'>
        <div className='w-20 bg-blue-600 border-solid rounded-2xl'></div>
        <div>
          <p className='my-2 font-bold'>Omeje Faith</p>
          <p>Free</p>
          <p>account</p>
        </div>
      </div>
    </div>
  )
}
export default SideBar
