import { useState } from 'react'
import { BellIcon, DotIcon, SearchIcon } from '../../assets/IconMessage'
import { messages, users } from './data'

import CallPage from './CallPage'
import UserChats from './UsersChat'
import UsersDetails from './UsersDetails'

const LiveChat = () => {
  return (
    <div className="ml-[1px]">
      <div className="flex gap-5 absolute m-4 right-4 items-center top-2">
        <div className="relative">
          <div className="absolute right-0 -top-2 text-white px-1 py-[0.5px] text-xs bg-[#225EA3] rounded-full">
            {messages.length}
          </div>
          <BellIcon />
        </div>

        <button className="bg-[#225EA3] text-white px-8 py-2 rounded-lg border-2 border-white shadow shadow-gray-400">
          Property
        </button>
      </div>
      <div className="">
        {/* <div className=" bg-[#225EA3] p-7  text-white text-sm ">
        <h3>Live Conversations</h3>
      </div>
      <div className="mt-14 ml-7 flex flex-col gap-7 font-semibold text-gray-500 text-[18px] ">
        <div className="flex gap-4">
          <UserMinusIcon /> Pending
        </div>
        <div className="flex gap-4">
          <BoxOpenIcon /> Open
        </div>
        <div className="flex gap-4">
          <HandWellIcon /> Solved
        </div>
      </div> */}
        <MessageBar />
      </div>
    </div>
  )
}

const MessageBar = () => {
  const [current, setCurrent] = useState([])
  const [details, setDetails] = useState([])

  const filterUser = (id) => {
    const currentUser = messages.filter((user) => user.id === id)
    //console.log(currentUser)
    setCurrent(currentUser)

    const userDetails = users.filter((user) => user.id === id)
    setDetails(userDetails)
    //return currentUser
  }

  return (
    <>
      <div className="flex gap-3">
        <div className="pt-4 px-6 bg-[#225EA3] mt-20 ">
          <form className="just justify-center relative">
            <div className="absolute m-3">
              {' '}
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="p-3 pl-10 rounded w-full"
            />
          </form>
          <div className="text-white py-8">{`Open`}</div>
          <div>
            {users.map((user, idx) => (
              <div
                onClick={() => filterUser(user.id)}
                key={idx}
                className="p-4 b-2 border border-t-white border-b-blue-500 my-5 rounded text-white relative flex gap-3 cursor-pointer "
              >
                <div className="w-9 h-8 bg-slate-400 rounded-full relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full border-2 b  absolute right-0 bottom-0"></div>
                </div>
                <div>
                  <div className="absolute right-0 top-0 p-1">
                    <DotIcon />
                  </div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm">{user.mesg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <UserChats current={current} />
        <UsersDetails details={details} />
      </div>
      <CallPage />
    </>
  )
}

export default LiveChat
