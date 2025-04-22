import { IoPlayCircle } from "react-icons/io5";



const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-70 px-12 absolute bg-gradient-to-r from-black text-white">
        <h1 className="text-5xl my-3 font-bold ">{title}</h1>
        <p className="my-3 w-2/5" >{overview}</p>

        <button className="my-2 mx-5 bg-white text-black font-bold w-28 py-3 border rounded-lg cursor-pointer hover:bg-opacity-70">Play</button>
        <button className="my-2 mx-3 bg-gray-600/60 font-bold text-white w-28 py-3 border rounded-lg cursor-pointer">Info</button>
    </div>
  )
}

export default VideoTitle