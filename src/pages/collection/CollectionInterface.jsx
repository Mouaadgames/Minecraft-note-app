import { useParams } from "react-router-dom"
import { getCollection } from "../../utils/APICommunication"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useQuery } from "react-query";
function CollectionInterface() {
  const { jwt } = useContext(AuthContext);
  const { collectionId } = useParams()
  const { data, isLoading, error } = useQuery("collection", () => getCollection(jwt, collectionId), {
    staleTime: 15 * 60 * 1000
  })
  return (
    <>
      {
        !isLoading ? (<div className="text-black">{data.collection.bookshelves.map((v) => (<p>{v.name}</p>))}</div>) : ""
      }

    </>
  )
}
export default CollectionInterface