import hangUpSingImg from "../assets/img/hangUpSing.png"
import useWindowSize from "../hooks/useWindowSize"

function HangUpSing({ text }) {
  const windowSize = useWindowSize()
  return (
    <div className="select-none flex justify-center -top-4 w-full h-1/5 min-h-[150px]">
      <div className="h-full inline min-h-[150px] relative">
        <img src={hangUpSingImg} alt="" className="h-full " />
        <h1 className={`text-black text-center absolute bottom-0 ${windowSize.height > 800 ? "text-[4.5vh] leading-[4.5vh]" : "text-3xl "} w-full`}>{text}</h1>
      </div>
    </div>
  )
}
export default HangUpSing