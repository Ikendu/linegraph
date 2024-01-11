//import Mic from './Icons/Mic.svg'
import microphone from './Icons/microphone.svg'
import minimise from './Icons/minimize.svg'

const CallPage = () => {
  return (
    <div className="bg-[#1b1349] w-4/5 pb-[0.5px]">
      <div className="text-gray-100  p-5 m-10 text-sm">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <p className="px-6 py-2 bg-[#0f0f3a] rounded-lg ">Evans David</p>
            <div className="px-6 py-2 bg-[#0f0f3a] rounded-lg flex gap-2 items-center ">
              <div className="bg-gray-300 p-2 rounded-full">
                <div className="bg-[#EB5757] p-1 rounded-full"></div>
              </div>{' '}
              <p>24:13:03</p>
            </div>
          </div>

          <div className="bg-[#0f0f3a] p-1 rounded-full ">
            <img src={minimise} />
          </div>
        </div>
      </div>
      <div className="border border-[#429AFF]  border-1 p-3 bg-[#0f0f3a] m-auto justify-center rounded-full flex w-48 ">
        <div className="p-14 px-16  bg-[#b3adad] rounded-full flex text-6xl font-semibold ">
          S
        </div>
      </div>
      <div className="m-5 mt-32">
        <div className=" bg-[#534158] w-52">
          <div className="pt-10 px-10 text-center text-[58px] font-semibold text-gray-500">
            <p>F</p>
          </div>

          <div className="flex justify-between  text-white text-sm -mt-3">
            <p className="m-2 py-1 px-4 bg-gray-800 rounded-full">Faith Ada</p>
            <div className="m-2 p-1 rounded-full bg-red-600 cursor-pointer">
              <img src={microphone} />
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
export default CallPage
