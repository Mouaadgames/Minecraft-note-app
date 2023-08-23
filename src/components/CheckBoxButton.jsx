
function CheckBoxButton({text, setIsChecked,isChecked}) {
  return (
    <div className="flex items-center gap-4 select-none">
      <div onClick={() => setIsChecked(!isChecked)} className="h-8 w-8 bg-black text-2xl cursor-pointer border-white border-solid border-4 flex justify-center items-center">
        {
          isChecked ? (<div className="h-4 w-4 bg-neutral-400 "></div>) : ""
        }
      </div>
      <span onClick={() => setIsChecked(!isChecked)} className=" text-2xl">{text}</span>
    </div>
  )
}
export default CheckBoxButton