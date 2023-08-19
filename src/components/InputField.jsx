import { useId, useState, useEffect } from "react"

function InputField({ validationRegex, setIsValid, tabIndex, width, hasALabel, label, type, name, setInputValue }) {
  const id = useId() // use useId here to get specific id
  const [inputV, setInput] = useState("");

  useEffect(() => {
    if (setInputValue) {
      setInputValue(inputV)
    }
  }, [inputV]);

  function validate() {
    setIsValid && setIsValid(false)
    if (!validationRegex) return ""
    if (!inputV) return ""
    if (!validationRegex.test(inputV)) return "red"
    setIsValid && setIsValid(true)
    return ""

  }

  return (
    <div className=" ">
      <div>

        {
          hasALabel && (<><label style={{ color: validate() }} className="text-2xl" htmlFor={id}>{label}</label> <br /></>)
        }
        <input tabIndex={tabIndex} onChange={(e) => setInput(e.target.value)} value={inputV} type={type} name={name} id={id} style={{ width }} className="text-white bg-black text-2xl border-neutral-500 border-solid border-4 px-1 " />
      </div>
    </div>
  )
}
export default InputField