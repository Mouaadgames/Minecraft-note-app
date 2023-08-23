import ControlBar from "./ControlBar/ControlBar"
import Collection from "./Collection"
import Modal from "../../components/Modal"
import ModalBody from "./CreateEditCollectionModalBody"
import { useState, useRef, useEffect, useContext } from "react"
import { getCollections } from "../../utils/APICommunication"
import { useQuery } from "react-query"
import { AuthContext } from "../../context/AuthContext"

function UserCollections() {
  const [search, setSearch] = useState("");
  const modalRef = useRef()
  const { jwt } = useContext(AuthContext);
  const { data, isLoading, error } = useQuery("getUserCollections", () => getCollections(jwt), {
    staleTime: 30 * 60 * 1000
  })
  const [collections, setCollections] = useState([])

  useEffect(() => {
    if (data) {
      setCollections([...data?.user?.collectionOwned, ...data?.user?.collectionShared])
    }
  }, [data]);


  return (
    <div className="bg-repeat bgWoodImg flex flex-col h-screen">
      <Modal ref={modalRef}>
        <ModalBody closeModel={() => modalRef.current.closeModal()} editMode={() => modalRef.current.editMode} />
      </Modal>
      <ControlBar openModal={() => modalRef.current.openModal()} setSearch={setSearch} />
      {
        isLoading ? (<p className="text-center">Loading...</p>) : (
          error ? (<p className="text-center"> error</p>) : (
            collections.length == 0 ? (<p className="text-center">No collection to display</p>) : (
              <div className="pt-4 px-4 flex flex-col flex-wrap gap-5 overflow-x-auto overflow-y-hidden flex-1">
                {
                  collections.map((collection, i) => { // change the key with the collection id id
                    if (collection.name.includes(search))
                      return (<Collection key={collection.id} collectionData={collection} openEditCollection={modalRef.current.openInEditMode} />)
                    if (collection.description.includes(search))
                      return (<Collection key={collection.id} collectionData={collection} openEditCollection={modalRef.current.openInEditMode} />)
                  })
                }
              </div>)))
      }

    </div >
  )
}
export default UserCollections