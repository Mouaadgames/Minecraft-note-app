import Button from "../../components/Button"
function SmallWindowSizeError({ setIgnoredSizeError }) {
  return (
    <div className="absolute z-50 bg-[#FFFD] top-0 inset-0 flex flex-col pt-8 text-black p-4 gap-4 text-center">
      <h2 className="text-2xl">This application is not optimized to word with small screen size</h2> 
      <p className="text-xl">Try using your phone in landscape mode to get ride of this error</p>
      <Button text={"Ignore"} onClick={() => setIgnoredSizeError(true)} className={"text-white self-center"} />
    </div>
  )
}
export default SmallWindowSizeError