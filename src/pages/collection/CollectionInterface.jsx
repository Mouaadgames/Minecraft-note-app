import { useParams } from "react-router-dom"
import { getCollection } from "../../utils/APICommunication"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useQuery } from "react-query";
import HangUpSing from "../../components/HangUpSing";
import { useEffect } from "react";
import BookShelf from "./BookShelf";
import TopBookshelfBar from "./TopBookshelfBar";
function CollectionInterface() {
  const { jwt } = useContext(AuthContext);
  const { collectionId } = useParams()
  const { data, isLoading, error, refetch } = useQuery("collection", () => getCollection(jwt, collectionId), {
    staleTime: 15 * 60 * 1000
  })
  console.log(data)
  useEffect(() => {
    refetch()
  }, []);
  return (

    <main className="grid grid-cols-3 h-screen bg-repeat bgWoodImg">
      {
        isLoading || data.collection ? (<>
          <div className="col-span-1 h-full overflow-y-auto" id="scrollBar">
            <div className="max-w-md mx-auto">
              {
                isLoading ? (<span className="text-center text-3xl">loading...</span>) : (
                  <>
                    <HangUpSing text={data.collection.name} className={"max-h-[250px]"} windowHeighFactor={4} />
                    <div className="grid grid-cols-2 gap-4 my-4 md:px-11">
                      {
                        data.collection.bookshelves.map((elem, i) => {
                          return (<div key={i}><BookShelf name={elem.name} filledPlaces={elem.filledPlaces} /></div>)
                        })
                      }
                    </div>
                  </>)
              }
            </div>
          </div>
          <div className="col-span-2 h-full bg-repeat bgStoneImg  ">
            <div className="max-w-xl h-screen mx-auto px-10">
              <TopBookshelfBar title={"Bookshelf1"} />
              <div className="grid ">

              </div>
            </div>
          </div></>) : (
          <p className="col-span-3 text-4xl text-center p-4">Either this collection dose not exist or you don't have access to it</p>
        )
      }
    </main >
  )
}
export default CollectionInterface