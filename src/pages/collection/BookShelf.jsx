import ToolTip from "./ToolTip"
import BookShelfImg from "../../assets/img/bookShelf.png"

import greenBook from "../../assets/img/shelf Books/greenBookOnShelff.webp"
import orangeBook from "../../assets/img/shelf Books/orengeBookOnShelff.webp"
import pinkBook from "../../assets/img/shelf Books/pinkBookOnShelff.webp"
import purpleBook from "../../assets/img/shelf Books/purpuleBookOnShelff.webp"

import { useRef, useState } from 'react'
function BookShelf({ bookshelfElement, onSelected }) {
  const bookPhotos = useRef([greenBook, orangeBook, pinkBook, purpleBook])
  const [onHover, setOnHover] = useState(false);
  return (
    <div onPointerEnter={() => setOnHover(true)} onPointerLeave={() => setOnHover(false)} onClick={() => onSelected(bookshelfElement)} className="relative flex flex-col items-center text-white text-4xl">
      <ToolTip name={bookshelfElement.name} show={onHover} />
      <img className="h-[10vw] w-[10vw] max-h-[130px] max-w-[130px]" src={BookShelfImg} alt="" />
      <div className="grid grid-cols-4 absolute aspect-square h-full grid-rows-2 items-end p-2 gap-y-4">
        {
          bookshelfElement.filledPlaces.map((place, index) =>
            place ? (<img key={index} src={bookPhotos.current[index % bookPhotos.current.length]} />) : (<p key={index}></p>)
          )
        }
      </div>
    </div>
  )
}
export default BookShelf