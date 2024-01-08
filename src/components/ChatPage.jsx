import {
  BoxOpenIcon,
  ChartIcon,
  ContactIcon,
  EventIcon,
  HomeIcon,
  InboxIcon,
  SettingIcon,
  UserMinusIcon,
} from '../assets/Icons'

const ChatPage = () => {
  return (
    <div>
      <nav className=' bg-[#225EA3] w-[75px] align-middle content-center pt-8'>
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
      <div className=' bg-[#225EA3] w-[209px] h-[95px] text-white'>
        <h3 className='m-auto'>Live Conversations</h3>
      </div>
      <div>
        Pending <UserMinusIcon />
      </div>
      <div>
        Open <BoxOpenIcon />
      </div>
      <div>Solved</div>
    </div>
  )
}
export default ChatPage
