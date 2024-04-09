import { useEffect, useState, useRef, useLayoutEffect } from "react";
import PlateImg from "../../assets/img/plate.png"
import Button from "../../components/Button"
import calculateHeight from "../../utils/getTANumberOfLines";


function TopBookshelfBar({ bookshelfObj, saveEditedBSTitle }) {
  const [titleState, setTitleState] = useState("")
  const [rowsState, setRowsState] = useState(1);
  const textAreaRef = useRef(null)
  const oldBookshelf = useRef(null)

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null)
  useLayoutEffect(() => {
    setTitleState(bookshelfObj.name)
    oldBookshelf.current = bookshelfObj
  }, [bookshelfObj]);

  useLayoutEffect(() => {
    setRowsState(calculateHeight(textAreaRef.current))
  }, [titleState])

  useEffect(() => {
    if (error) {
      timeoutRef.current = setTimeout(() => {
        setError("")
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutRef.current)
    };
  }, [error]);


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
        {/* is difference than the stored prev object  */}
        {/* refetch the validate data and outside and try to disable save button */}
        <Button disable={titleState === oldBookshelf.current?.name || isLoading || error} className={isLoading ? "text-green-500" : error ? "text-red-500" : ""} onClick={async () => { setIsLoading(true); await saveEditedBSTitle(titleState) ? bookshelfObj = { ...bookshelfObj, name: titleState } : ""; setIsLoading(false) }} text={isLoading ? "saving..." : false || error ? "something went wrong" : false || "Save"} />
        <Button disable={bookshelfObj.numberOfBooks === 8} onClick={() => { }} text={"Add book"} />
      </div>
    </section>
  )
}
export default TopBookshelfBar