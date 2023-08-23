import { useState,useEffect } from "react"

function RadioButton({ texts = [], defaultCheck = 1,setValue }) {
  const [currentChecked, CurrentChecked] = useState(defaultCheck);
  useEffect(() => {
    setValue(currentChecked)
  }, [currentChecked]);
  return (
    <div>
      {
        texts.map((text, i) => {
          return (<div key={i} className="flex items-center gap-4 text-2xl my-2">
            <div onClick={() => CurrentChecked(i + 1)} className="h-8 w-8 bg-black text-2xl cursor-pointer rounded-full border-white border-solid border-4 flex justify-center items-center">
              {
                i + 1 == currentChecked ? (<div className="h-4 w-4 bg-neutral-400 rounded-full"></div>) : ""
              }
            </div>
            <span>{text}</span>
          </div>)
        })
      }
    </div>
  )
}
export default RadioButton