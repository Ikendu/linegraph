import {
  AttarchIcon,
  BoxOpenIcon,
  CallIcon2,
  CallsIcon,
  ChartIcon,
  ChatIcon,
  ComputerIcon,
  ContactIcon,
  DotIcon,
  DotvertIcon,
  EventIcon,
  EyeIcon,
  HandWellIcon,
  HomeIcon,
  InboxIcon,
  MapIcon,
  MessageIcon,
  MessageIcon2,
  NoteIcon,
  PlusCircle,
  SearchIcon,
  SenderIcon,
  SettingIcon,
  UserIcon,
  UserIcon2,
  UserMinusIcon,
  VideoIcon,
} from '../../assets/Icons'
import { admin, users } from '../Data'

const ChatPage = () => {
  return (
    <div className='flex bg-gray-200'>
      <nav className=' bg-[#225EA3] w-[75px] align-middle content-center pt-8 '>
        <div className='w-10 mx-auto '>
          <div className='flex gap-4 items-center pb-8 w-20'>
            <HomeIcon />
          </div>
          <div className='flex gap-4 items-center pb-8 w-20'>
            <InboxIcon />
          </div>
          <div className='flex gap-4 items-center pb-8 w-20'>
            <ContactIcon />
          </div>
          <div className='flex gap-4 items-center pb-8 w-20'>
            <EventIcon />
          </div>
          <div className='flex gap-4 items-center pb-8 w-20'>
            <ChartIcon />
          </div>
          <div className='flex gap-4 items-center pb-8 w-20'>
            <SettingIcon />
          </div>
          <div className='flex gap-4 items-center pb-8 w-20'>
            <h3>{`S`}</h3>
          </div>
        </div>
      </nav>
      <LiveChat />
      <MessageBar />
      <UserChats />
      <UserDetails />
    </div>
  )
}

const LiveChat = () => {
  return (
    <div>
      <div className=' bg-[#225EA3] p-7  text-white text-sm'>
        <h3>Live Conversations</h3>
      </div>
      <div className='mt-14 ml-7 flex flex-col gap-7 font-semibold text-gray-500 text-[18px] '>
        <div className='flex gap-4'>
          <UserMinusIcon /> Pending
        </div>
        <div className='flex gap-4'>
          <BoxOpenIcon /> Open
        </div>
        <div className='flex gap-4'>
          <HandWellIcon /> Solved
        </div>
      </div>
    </div>
  )
}

const MessageBar = () => {
  return (
    <div className='pt-4 px-6 bg-[#225EA3] mt-20 '>
      <form className='just justify-center relative'>
        <div className='absolute m-3'>
          {' '}
          <SearchIcon />
        </div>
        <input type='text' placeholder='Search' className='p-3 pl-10 rounded w-full' />
      </form>
      <div className='text-white py-8'>{`Open`}</div>
      <div>
        {users.map((user) => (
          <div
            key={user.name}
            className='p-4 b-2 border border-t-white border-b-blue-500 my-5 rounded text-white relative flex gap-3  '
          >
            <div className='w-11 h-8 bg-slate-400 rounded-full relative'>
              <div className='w-2 h-2 bg-green-500 rounded-full border-2 b  absolute right-0 bottom-0'></div>
            </div>
            <div>
              <div className='absolute right-0 top-0 p-1'>
                <DotIcon />
              </div>
              <h3 className='font-semibold'>{user.name}</h3>
              <p className='text-sm'>{user.mesg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import smileIcon from './Icons/smile.svg'
import UploadIcon from './Icons/upload.svg'
import videoIcon from './Icons/video.svg'

const UserChats = () => {
  return (
    <div className='mt-20 bg-white p-10 relative border-2 shadow-lg '>
      <h3>Messages</h3>
      <div className='flex gap-2 absolute right-10'>
        <div className='p-2 rounded-full bg-slate-200 text-gray-600'>
          <CallsIcon />
        </div>
        <div className='p-2 rounded-full bg-slate-200 text-gray-600'>
          <VideoIcon />
        </div>
        <div className='p-2 rounded-full bg-slate-200 text-gray-600'>
          <DotvertIcon />
        </div>
      </div>

      <div className='mt-10 text-gray-600 flex gap-4 items-center py-10'>
        <div className='border-b w-[250px] m-4 '></div>
        {`January 23, 2024`}
      </div>
      <div>
        {users.map((user, idx) => (
          <div key={user.name} className='p-2 w-full'>
            <div className='bg-[#f1f1f7] p-3 rounded-md w-full flex gap-4'>
              <div>
                <div className='h-10 w-10 bg-[#f3d0c6] rounded-full'></div>
              </div>
              <div>
                <div className='flex justify-between items-center '>
                  <div className='font-semibold text-gray-500'>{user.name}</div>
                  <div className='text-[10px] text-gray-400'>{user.time}</div>
                </div>

                <div className='thin text-gray-500'>{user.mesg}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='border rounded-xl p-4 w-full px-10 text-gray-500'>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-1 items-center text-xs'>
            <ChatIcon /> Chat
          </div>
          <div className='flex gap-1 items-center text-xs'>
            <MessageIcon /> Email
          </div>
        </div>
        <textarea
          type='text'
          placeholder='Type a message...'
          className='w-full py-10 outline-none'
        />
        <div className='flex gap-4 relative'>
          <img src={UploadIcon} />
          <img src={smileIcon} />
          <div className='border-l pl-4 '>
            <img src={videoIcon} />
          </div>
          <div className='absolute right-0'>
            <SenderIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

import tagIcon from './Icons/tag.svg'
import userIcon from './Icons/user.svg'
import wifiIconIcon from './Icons/wifiIcon.svg'

const UserDetails = () => {
  return (
    <div className='mt-20 bg-white relative border-2'>
      <div>
        <div className='flex gap-3 mt-5 m-4 text-gray-500'>
          <p>Info</p>
          <p>Viewed Pages</p>
        </div>
        <hr />

        <div className='m-4 mt-7 p-5 border shadow-lg shadow-gray-400 border-t-0 grid grid-col gap-8 text-gray-500'>
          <div className='flex gap-3'>
            <UserIcon />
            <p>Ikenna Ekeh</p>
          </div>
          <div className='flex gap-3'>
            <MessageIcon2 />
            <p>youremail@gmail.com </p>
          </div>
          <div className='flex gap-3'>
            <CallIcon2 />
            <p>2348967456789</p>
          </div>
          <div className='flex gap-3'>
            <MapIcon />
            <p>45 Aku Road Nsukka, Enugu</p>
          </div>
          <div className='flex gap-3'>
            <img src={wifiIconIcon} /> 102.988.234.02
          </div>
          <div className='flex gap-3'>
            <ComputerIcon />
            <p>Firefox 45, Hp EliteBook</p>
          </div>
          <div className='flex gap-3'>
            <NoteIcon />
            <p>Add Note</p>
          </div>
          <div className='flex gap-3'>
            <img src={tagIcon} />
            <p>Add a tag</p>
            <PlusCircle />
          </div>
          <div className='flex gap-3'>
            <img src={userIcon} />
            <p>Assignee: Omejeani...</p>
          </div>
        </div>
        <div className=' border-2 shadow-lg shadow-gray-400 m-4 p-5 mt-8'>
          <div className='mb-3 text-gray-500 font-semibold flex gap-3 '>
            <EyeIcon />
            Current Pages
          </div>
          <p className='text-xs my-3'>
            On website 1 hr 30mins, Viewed 1 page(s), this is the first visit{' '}
          </p>
          <p className='text-xs text-[#2D80E0]'>http://www.nanocode.com/ContactUs</p>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
