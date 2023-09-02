function ToolTip({ name, show }) {
  return (
    <div className={`flex flex-col justify-center absolute ${!show ? "hidden" : ""} -translate-y-14`}>
      <p className={`text-xl w-fit p-1 text-center z-50 min-w-[50px]  text-black rounded-md bg-white `}>{name}</p>
      <span className="triangle mx-auto "></span>
    </div>
  )
}
export default ToolTip