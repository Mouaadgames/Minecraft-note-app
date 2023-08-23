import { useState, useImperativeHandle, forwardRef } from "react"

function Modal(props, ref) {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [editMode, setEditMode] = useState({ isActive: false, collection: null })
  useImperativeHandle(ref, () => {
    return {
      openModal() {
        setModelIsOpen(true)
        setEditMode({ isActive: false  })
      },
      openInEditMode(collection) {
        setModelIsOpen(true)
        setEditMode({ isActive: true, collection })
      },
      closeModal() {
        setModelIsOpen(false)
      },
      editMode
    }
  }, [editMode])
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