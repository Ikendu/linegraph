import {
  BoxOpenIcon,
  ChartIcon,
  ContactIcon,
  EventIcon,
  HandWellIcon,
  HomeIcon,
  InboxIcon,
  SettingIcon,
  UserMinusIcon,
} from '../assets/Icons'

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
        <div className='flex'>
          <HandWellIcon /> Solved
        </div>
      </div>
    </div>
  )
}
export default ChatPage
