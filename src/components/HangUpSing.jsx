import hangUpSingImg from "../assets/img/hangUpSing.png"
import useWindowSize from "../hooks/useWindowSize"
// this should be refactored to be more costume
function HangUpSing({ text, writeable = false,setInputValue,fieldValue }) {
  const windowSize = useWindowSize()

  return (
    <div className="select-none flex justify-center -top-4 w-full ">
      <div className="inline min-h-[150px] relative" style={{ height: windowSize.height / 3.5 }}>
        <img src={hangUpSingImg} alt="" className="h-full" />
        {
          writeable ? (
            <textarea placeholder="Collection name" maxLength={20} type="text" onChange={(e) => setInputValue(e.target.value)} value={fieldValue} className={`text-black flex items-center justify-center resize-none text-xl text-center absolute bottom-[25%] translate-y-1/2 p-2  ${windowSize.height > 800 ? "text-[5.3vh] leading-[4.5vh]" : "text-[5.3vh] leading-[4.5vh]"} w-full bg-transparent border-none focus:outline-none`} ></textarea>
          ) : (
            <h1 className={`text-black text-center absolute bottom-[25%] translate-y-1/2 p-2 ${windowSize.height > 800 ? "text-[5.3vh] leading-[4.5vh]" : "text-[5.3vh] leading-[4.5vh]"} w-full`}>{text}</h1>
          )
        }
      </div>
    </div>
  )
}
export default HangUpSing