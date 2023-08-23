import { useId, useState, useEffect, useRef } from "react"

function TextArea({ validationRegex, className, setIsValid, rows, tabIndex, hasALabel, label, name, setInputValue, inputValue }) {
  const id = useId()
  const validationColor = useRef(false)


  useEffect(() => {
    function main() {
      let validation = false

      if (!validationRegex) return ["", validation]
      if (!inputValue) return ["", validation]
      if (!validationRegex.test(inputValue)) return ["red", validation]

      validation = true
      return ["", validation]
    }

    const [color, validation] = main()
    setIsValid && setIsValid(validation)
    validationColor.current = color
  })

  return (
    <div className={"inline-block" + " " + className}>
      {
        hasALabel && (<><label style={{ color: validationColor.current }} className="text-2xl" htmlFor={id}>{label}</label> <br /></>)
      }
      <textarea tabIndex={tabIndex} value={inputValue} name={name} id={id} onChange={(e) => setInputValue(e.target.value)} cols="24" rows={rows} className="text-white resize-none bg-black text-2xl border-neutral-500 border-solid border-4 px-1 w-full"  maxLength={50}></textarea>
    </div>
  )
}
export default TextArea