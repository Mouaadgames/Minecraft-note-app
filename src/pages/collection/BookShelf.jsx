import ToolTip from "./ToolTip"
import BookShelfImg from "../../assets/img/bookShelf.png"

import { useState } from 'react'
function BookShelf({ name, filledPlaces }) {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className="relative flex flex-col items-center text-white text-4xl">
      <ToolTip name={name} show={onHover} />
      <img onPointerEnter={()=>setOnHover(true)} onPointerLeave={()=>setOnHover(false)} className="h-[10vw] w-[10vw] max-h-[130px] max-w-[130px]" src={BookShelfImg} alt="" />
    </div>
  )
}
export default BookShelf