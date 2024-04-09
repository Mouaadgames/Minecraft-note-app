import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useQuery } from "react-query"
import { GetBookshelfInfo } from "../../utils/APICommunication"

import BookImgs from "../../assets/img/books"

function BooksUI({ bookshelfElem }) {
  const { jwt } = useContext(AuthContext)
  const { data, isLoading, isError, isFetching, refetch } = useQuery("books", () => GetBookshelfInfo(jwt, bookshelfElem.id), {
    staleTime: 15 * 60 * 1000
  })
  const [BooksImgs, setBooksImgs] = useState([]);
  useEffect(() => {
    refetch()
  }, [bookshelfElem.id]);
  useEffect(() => {
    let res = []
    BookImgs.map(async (v) => {
      res.push(await v)
    })
    setBooksImgs(res)
  }, []);
  return (
    <div className="grid grid-cols-2 gap-y-7 ">
      {
        isLoading ? (<p>loading...</p>) :
          data.books.map((book, i) => {
            if (book) {
              return (<div key={i} className="flex gap-4 pl-4  text-black text-xl">
                <img className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer" src={BooksImgs[book.icon]?.default} alt="book img" />
                {
                  book.isHidden ? (
                    <div>
                      <span>unknown</span> <br />
                      <span>pages : unknown</span>
                    </div>
                  ) : (

                    <div>
                      <span>{book.title}</span> <br />
                      <span>pages : {book.numberOfPages}</span>
                    </div>
                  )
                }
              </div>)
            }



            return (<div key={i} className="pl-4">
              <img src={BooksImgs[8]?.default} alt="empty book placeholder" />
            </div>)
          })

      }
    </div >)
}
export default BooksUI