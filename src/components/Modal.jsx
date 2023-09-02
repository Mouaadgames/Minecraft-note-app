import { useState, useImperativeHandle, forwardRef } from "react"
import { getCollectionInfo } from "../utils/APICommunication";
function Modal(props, ref) {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [editMode, setEditMode] = useState({ isActive: false, collection: null })
  const [isLoading, setIsLoading] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      openModal() {
        setModelIsOpen(true)
        setEditMode({ isActive: false })
      },
      openInEditMode: async (jwt, collectionId) => {
        setIsLoading(true)
        const collection = await getCollectionInfo(jwt, collectionId)
        setIsLoading(false)
        setModelIsOpen(true)
        setEditMode({ isActive: true, collection: collection.collection })
      },
      closeModal() {
        setModelIsOpen(false)
        props.refetchData()
      },
      editMode
    }
  }, [editMode])
  if (isLoading) {
    return (<div className="absolute top-0 inset-0 bg-[#555A] z-50 h-screen flex justify-center items-center">
      <div className="loadingAnimation"><div></div>
      <div></div>
      <div></div></div>
    </div>)
  }
  if (!modelIsOpen) {
    return null
  }

  return (
    <div className={"absolute top-0 inset-0 bg-[#333A] z-50 h-screen "}>
      {props.children}
    </div>
  )
}
export default forwardRef(Modal)