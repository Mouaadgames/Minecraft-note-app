import buttonImg from "../assets/img/button.jpg"
import hoverButtonImg from "../assets/img/hoveredButton.jpg"
import { useEffect, useState } from 'react';
function Button({ disable, onClick, tabIndex, text, submit, className }) {
  const [onHover, setOnHover] = useState(false)
  useEffect(() => {
    if (!disable)
      setOnHover(false)
  }, [disable]);
  return (
    <button disabled={disable} onClick={onClick} type={submit && "submit"} tabIndex={tabIndex} className={"relative select-none cursor-pointer backdrop-filter-none disabled:cursor-not-allowed" + " " + className} onPointerEnter={() => !disable && setOnHover(true)} onPointerLeave={() => setOnHover(false)}>
      <img src={onHover ? hoverButtonImg : buttonImg} alt="button" className="w-[180px] h-[40px]" />
      <p className={`absolute text-xl whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${onHover & "text-yellow-200"} ${disable && "text-neutral-800"}`}>{text}</p>
    </button>
  )
}
export default Button