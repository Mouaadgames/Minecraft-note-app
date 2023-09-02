import { useEffect, useState, useRef, useLayoutEffect } from "react";
import PlateImg from "../../assets/img/plate.png"
import Button from "../../components/Button"
import calculateHeight from "../../utils/getTANumberOfLines";


function TopBookshelfBar({ bookshelfObj }) {
  const [titleState, setTitleState] = useState("")
  const [rowsState, setRowsState] = useState(1);
  const textAreaRef = useRef(null)
  const oldBookshelf = useRef(null)

  useLayoutEffect(() => {
    setTitleState(bookshelfObj.name)
    oldBookshelf.current = bookshelfObj
  }, [bookshelfObj]);
  
  useLayoutEffect(() => {
    setRowsState(calculateHeight(textAreaRef.current))
  }, [titleState])


  return (
    <section className="mt-4 flex justify-between">
      <div className="relative flex justify-center items-center">
        <img className="w-52" src={PlateImg} alt="" />
        <textarea ref={textAreaRef}
          onChange={e => {
            console.log(titleState !== bookshelfObj.name)
            setTitleState(e.target.value)
          }}
          value={titleState}
          rows={rowsState}
          maxLength={20}
          className="absolute text-3xl resize-none max-w-full bg-transparent text-center h-fit px-4 outline-none flex items-center break-words justify-center" >
        </textarea>
      </div>
      <div className="flex flex-col justify-around">
        {/* is deffrent than the stored prev object  */}
        <Button disable={titleState === bookshelfObj.name} onClick={() =>   { }} text={"Save"} />
        <Button disable={bookshelfObj.numberOfBooks === 8} onClick={() => { }} text={"Add book"} />
      </div>
    </section>
  )
}
export default TopBookshelfBar