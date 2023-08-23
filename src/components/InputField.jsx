import { useId, useState, useEffect, useRef } from "react"

function InputField({ validationRegex, initValue = "", className, setIsValid, tabIndex, hasALabel, label, type, name, setInputValue }) {
  const id = useId() // use useId here to get specific id
  const [inputV, setInput] = useState(initValue);
  const validationColor = useRef(false)
  useEffect(() => {
    console.log(inputV);
    setInputValue && setInputValue(inputV)
  }, [inputV]);

  useEffect(() => {
    function main() {
      let validation = false

      if (!validationRegex) return ["", validation]
      if (!inputV) return ["", validation]
      if (!validationRegex.test(inputV)) return ["red", validation]

      validation = true
      return ["", validation]
    }

    const [color, validation] = main()
    setIsValid && setIsValid(validation)
    validationColor.current = color
  })


  return (
    <div className={" z-10 text-2xl " + " " + className}>
      <div>
        {
          hasALabel && (<><label style={{ color: validationColor.current }} className="" htmlFor={id}>{label}</label> <br /></>)
        }
        <input tabIndex={tabIndex} onChange={(e) => setInput(e.target.value)} value={inputV} type={type} name={name} id={id} className="text-white bg-black  border-neutral-500 border-solid border-4 px-1 w-full" />
      </div>
    </div>
  )
}
export default InputField