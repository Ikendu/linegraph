import {
  CallIcon2,
  ComputerIcon,
  EyeIcon,
  MapIcon,
  MessageIcon2,
  NoteIcon,
  PlusCircle,
  UserIcon,
} from '../../assets/IconMessage'

import tagIcon from './Icons/tag.svg'
import user from './Icons/user.svg'
import wifiIcon from './Icons/wifiIcon.svg'

const UsersDetails = ({ details }) => {
  return (
    <div>
      <div className="mt-20 bg-white relative border-2">
        <div>
          <div className="flex gap-3 mt-5 m-4 text-gray-500">
            <p>Info</p>
            <p>Viewed Pages</p>
          </div>
          <hr />
          {details?.map((detail, idx) => (
            <>
              <div
                key={idx}
                className="m-4 mt-7 p-5 border shadow-lg shadow-gray-400 border-t-0 grid grid-col gap-8 text-gray-500"
              >
                <div className="flex gap-3">
                  <UserIcon />
                  <p>{detail.name}</p>
                </div>
                <div className="flex gap-3">
                  <MessageIcon2 />
                  <p>{detail.email} </p>
                </div>
                <div className="flex gap-3">
                  <CallIcon2 />
                  <p>{detail.phone}</p>
                </div>
                <div className="flex gap-3">
                  <MapIcon />
                  <p>{detail.address}</p>
                </div>
                <div className="flex gap-3">
                  <img src={wifiIcon} /> {detail.ip}
                </div>
                <div className="flex gap-3">
                  <ComputerIcon />
                  <p>Firefox 45, Hp EliteBook</p>
                </div>
                <div className="flex gap-3">
                  <NoteIcon />
                  <p>Add Note</p>
                </div>
                <div className="flex gap-3">
                  <img src={tagIcon} />
                  <p>Add a tag</p>
                  <PlusCircle />
                </div>
                <div className="flex gap-3">
                  <img src={user} />
                  <p>Assignee: Omejeani...</p>
                </div>
              </div>
              <div className=" border-2 shadow-lg shadow-gray-400 m-4 p-5 mt-8">
                <div className="mb-3 text-gray-500 font-semibold flex gap-3 ">
                  <EyeIcon />
                  Current Pages
                </div>
                <p className="text-xs my-3">
                  On website 1 hr 30mins, Viewed 1 page(s), this is the first
                  visit{' '}
                </p>
                <p className="text-xs text-[#2D80E0]">
                  http://www.nanocode.com/ContactUs
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
export default UsersDetails
