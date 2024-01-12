import DotVert from './Icons/DotVert.svg'
import attarch from './Icons/attarch.svg'
import call from './Icons/call.svg'
import camSlach from './Icons/camSlach.svg'
import micblack from './Icons/micblack.svg'
import microphone from './Icons/microphone.svg'
import minimise from './Icons/minimize.svg'
import smile2 from './Icons/smile2.svg'
import videoCaller from './Icons/videoCaller.png'
import videoCaller2 from './Icons/videoCaller2.png'

const VideoPage = () => {
  return (
    <div
      className="m-5 pb-[0.5px] h-[550px] relative"
      style={{ backgroundImage: `url(${videoCaller})` }}
    >
      <div className="text-gray-100  p-5 m-10 text-sm ">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <p className="px-6 py-2 bg-[#24243f] rounded-lg bg-opacity-40 ">
              Evans David
            </p>
            <div className="px-6 py-2 bg-[#24243f] rounded-lg flex gap-2 items-center bg-opacity-40">
              <div className="bg-gray-300 p-2 rounded-full">
                <div className="bg-[#EB5757] p-1 rounded-full "></div>
              </div>{' '}
              <p>24:13:03</p>
            </div>
          </div>

          <div className="bg-[#0f0f3a] p-1 rounded-full bg-opacity-40">
            <img src={minimise} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full ">
        <div className="m-5 mt-28 flex justify-between items-center ">
          <div
            className="w-1/3 rounded-xl"
            style={{ backgroundImage: `url(${videoCaller2})` }}
          >
            <div className="p-20"></div>
            <div className="flex justify-between  text-white text-sm -mt-3">
              <p className="m-2 py-1 px-4 bg-gray-800 rounded-full bg-opacity-40">
                Faith Ada
              </p>
              <div className="m-2 p-1 rounded-full bg-red-600 cursor-pointer">
                <img src={microphone} />
              </div>
            </div>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <div>
              <img src={micblack} />
            </div>
            <div>
              <img src={camSlach} />
            </div>
            <div className="p-2 rounded-full bg-slate-300">
              <img src={smile2} />
            </div>
            <div className="p-2 px-[15px] rounded-full bg-slate-300">
              <img src={attarch} />
            </div>
            <div>
              <img src={DotVert} />
            </div>
            <div>
              <img src={call} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoPage
