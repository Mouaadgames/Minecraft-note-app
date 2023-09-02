import { useParams } from "react-router-dom"
import { getCollection } from "../../utils/APICommunication"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useQuery } from "react-query";
import HangUpSing from "../../components/HangUpSing";
import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import TopBookshelfBar from "./TopBookshelfBar";
import BooksUI from "./BooksUI";
function CollectionInterface() {
  /**TODO :
   * show books in a pretty way
   * make bookshelves name editable 
   * add book place switching
   * and book bookshelves switching
   * creating a book with some info
   * change the book info 
   * add some UX 
   * write to the book 
   */
  const { jwt } = useContext(AuthContext);
  const { collectionId } = useParams()
  const [currentBookshelf, setCurrentBookshelf] = useState(null);
  const { data, isLoading, isFetching, error, refetch } = useQuery("collection", () => getCollection(jwt, collectionId), {
    staleTime: 15 * 60 * 1000
  })
  console.log(data)
  useEffect(() => {
    refetch()
  }, []);
  function selectBookshelf(bookshelfObj) {
    setCurrentBookshelf(bookshelfObj)
  }
  return (

    <main className="grid grid-cols-3 h-screen bg-repeat bgWoodImg overflow-y-hidden ">
      {
        isFetching || isLoading || data?.collection ? (<>
          <div className="col-span-1 h-full overflow-y-auto" id="scrollBar">
            <div className="max-w-md mx-auto">
              {
                isFetching || isLoading ? (<span className="text-center text-3xl">loading...</span>) : (
                  <>
                    <HangUpSing text={data.collection.name} className={"max-h-[250px]"} windowHeighFactor={4} />
                    <div className="grid grid-cols-2 gap-4 py-4 md:px-11">
                      {
                        data.collection.bookshelves.map((elem, i) => {
                          return (<div key={i}><BookShelf onSelected={selectBookshelf} bookshelfElement={elem} /></div>)
                        })
                      }
                    </div>
                  </>)
              }
            </div>
          </div>
          <div className="col-span-2 h-full bg-repeat bgStoneImg  ">
            <div className="max-w-xl h-screen mx-auto px-10">
              {
                currentBookshelf && (
                  <>
                    <TopBookshelfBar bookshelfObj={currentBookshelf} />
                    <BooksUI bookshelfElem={currentBookshelf} />
                  </>)
              }
            </div>
          </div></>) : (
          <p className="col-span-3 text-4xl text-center p-4">Either this collection dose not exist or you don't have access to it</p>
        )
      }
    </main >
  )
}
export default CollectionInterface