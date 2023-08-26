function ToolTip({ name, show }) {
  return (
    <div className={`flex justify-center relative w-full ${!show ? "hidden" : ""} -translate-y-10`}>
      <p className={`text-xl w-1/2 text-center absolute z-50 text-black rounded-md bg-white `}>{name}</p>
      <span className="triangle mx-auto absolute translate-y-[25px]"></span>
    </div>
  )
}
export default ToolTip