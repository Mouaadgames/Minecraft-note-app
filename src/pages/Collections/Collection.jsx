import signImg from "../../assets/img/sign.png"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react";
import { getCollectionInfo } from "../../utils/APICommunication"
function Collection({ collectionData, onClick, openEditCollection }) {
  const { jwt } = useContext(AuthContext)
  return (
    <div className="flex items-center relative max-w-2xl select-none">
      <Link to={"/collection/" + collectionData.id} className="flex items-center relative max-w-2xl">
        <div onClick={onClick} className="relative cursor-pointer flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out">
          <img className="w-52" src={signImg} alt="" />
          <span className="absolute p-2 z-10 text-black text-2xl text-center">{collectionData.name}</span>
        </div>
        <div onClick={onClick} className="max-w-[240px] pl-4 cursor-pointer">
          {collectionData.description && (<><span className="break-words">Description : {collectionData.description}</span><br /></>)}
          <span>
            Number Of Books : {collectionData.numberOfBooks}
          </span>
        </div>
      </Link>
      <span className="flex-1"></span>
      <div onClick={() => openEditCollection(jwt, collectionData.id)} className="relative self-start top-0 right-0 border-white border-solid border-2 pt-1 pl-[6px] aspect-square w-8 h-8 rounded-full cursor-pointer hover:bg-[#FFF7] ">🖍</div>
    </div>
  )
}
export default Collection