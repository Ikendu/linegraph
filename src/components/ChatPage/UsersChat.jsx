import { useState } from 'react'
import {
  CallsIcon,
  ChatIcon,
  DotvertIcon,
  MessageIcon,
  SenderIcon,
  VideoIcon,
} from '../../assets/IconMessage'
import smileIcon from './Icons/smile.svg'
import UploadIcon from './Icons/upload.svg'
import videoIcon from './Icons/video.svg'
import { admin } from './data'

const UserChats = ({ current }) => {
  const [input, setInput] = useState({ mesg: `` })

  const [userMesg, setUserMesg] = useState(current)

  const handleChange = (e) => {
    let id = current[0]?.id
    let name = current[0]?.name
    let time = Date.now()
    let email = current[0]?.email
    setInput({
      ...input,
      id,
      name,
      time,
      email,
      [e.target.name]: e.target.value,
    })
    //console.log(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserMesg([...userMesg, input])
    console.log(userMesg)
  }

  return (
    <div className="mt-20 bg-white p-10 relative border-2 shadow-lg ">
      <h3>Messages</h3>
      <div className="flex gap-2 absolute right-10">
        <div className="p-2 rounded-full bg-slate-200 text-gray-600">
          <CallsIcon />
        </div>
        <div className="p-2 rounded-full bg-slate-200 text-gray-600">
          <VideoIcon />
        </div>
        <div className="p-2 rounded-full bg-slate-200 text-gray-600">
          <DotvertIcon />
        </div>
      </div>

      <div className="mt-10 text-gray-600 flex gap-4 items-center py-10">
        <div className="border-b w-[250px] m-4 "></div>
        {`January 23, 2024`}
      </div>
      <div>
        {current.map((user, idx) => (
          <div key={idx} className="p-2 w-full">
            <div className="bg-[#f1f1f7] p-3 rounded-md w-full flex gap-4">
              <div>
                <div className="h-10 w-10 bg-[#f3d0c6] rounded-full relative">
                  <div className="h-3 w-3 bg-[#2CC84A] rounded-full absolute border-2 border-white right-0 bottom-0"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center ">
                  <div className="font-semibold text-gray-500">
                    {user?.name}
                  </div>
                  <div className="text-[10px] text-gray-400">{user?.time}</div>
                </div>
                <div className="thin text-gray-500">{user?.mesg}</div>
              </div>
            </div>
            <div>
              {admin[idx]?.name && (
                <div className=" p-3 rounded-md w-full flex gap-4">
                  <div>
                    <div className="h-10 w-10 bg-[#d5d4f5] rounded-full relative"></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center ">
                      <div className="font-semibold text-gray-500">
                        {admin[idx]?.name}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {admin[idx]?.time}
                      </div>
                    </div>
                    <div className="thin text-gray-500">{admin[idx]?.mesg}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border rounded-xl p-4 w-full px-10 text-gray-500">
        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center text-xs">
            <ChatIcon /> Chat
          </div>
          <div className="flex gap-1 items-center text-xs">
            <MessageIcon /> Email
          </div>
        </div>
        <form>
          <textarea
            value={input.mesg}
            name="mesg"
            onChange={handleChange}
            type="text"
            placeholder="Type a message..."
            className="w-full py-10 outline-none"
          />

          <div className="flex gap-4 relative">
            <img src={UploadIcon} />
            <img src={smileIcon} />
            <div className="border-l pl-4 ">
              <img src={videoIcon} />
            </div>
            <div className="absolute right-0" onClick={handleSubmit}>
              <SenderIcon />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserChats
