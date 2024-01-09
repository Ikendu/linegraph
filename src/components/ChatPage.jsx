import {
  BoxOpenIcon,
  ChartIcon,
  ContactIcon,
  DotIcon,
  DotvertIcon,
  EventIcon,
  HandWellIcon,
  HomeIcon,
  InboxIcon,
  SearchIcon,
  SettingIcon,
  UserMinusIcon,
} from '../assets/Icons'
import { users } from './Data'

const ChatPage = () => {
  return (
    <div className='flex'>
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
    </div>
  )
}

const LiveChat = () => {
  return (
    <div>
      <div className='bg-[#225EA3] p-10  text-white text-lg'>
        <h3 className=''>Live Conversations</h3>
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
    <div className='p-10 bg-[#225EA3] m-10 h-[977px]'>
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
            className='p-4 b-2 border my-5 rounded text-white relative flex gap-3  '
          >
            <div className='w-12 h-12 bg-slate-400 rounded-full'></div>
            <div>
              <div className='absolute right-0 top-0 p-1'>
                <DotIcon />
              </div>
              <h3 className='font-semibold text-lg'>{user.name}</h3>
              <p>{user.mesg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const UserChats = () => {
  return (
    <div className='mt-10 h-[977px] bg-white p-10'>
      <h3>Messages</h3>
      <div>
        <div></div>
        <div></div>
        <div>
          <DotvertIcon />
        </div>
      </div>
    </div>
  )
}

export default ChatPage
