import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useQuery } from "react-query"
import { GetBookshelfInfo } from "../../utils/APICommunication"

function BooksUI({ bookshelfElem }) {
  const { jwt } = useContext(AuthContext)
  const { data, isLoading, isError, isFetching, refetch } = useQuery("books", () => GetBookshelfInfo(jwt, bookshelfElem.id), {
    staleTime: 15 * 60 * 1000
  })
  useEffect(() => {
    refetch()
  }, [bookshelfElem.id]);
  console.log(data, isLoading);
  return (
    <div className="grid grid-cols-2">
      {
        isLoading ? (<p>loading...</p>) :
          data.books.map((book) => {
            if (book) {
              return (<div>{book.title}</div>)
            }
            return (<div></div>)
          })

      }
    </div>)
}
export default BooksUI