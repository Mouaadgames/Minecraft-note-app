import signImg from "../../assets/img/sign.png"

function Collection({ name, description, numOfBooks }) {
  return (
    <div className="flex items-center gap-4 relative max-w-2xl select-none">
      <div className="relative flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out">
        <img className="w-52" src={signImg} alt="" />
        <span className="absolute p-2 z-10 text-black text-2xl text-center">{name}</span>
      </div>
      <div className="max-w-[240px]">
        {description && (<><span>Description : {description}</span><br /></>)}
        <span>
          
          Number Of Books : {numOfBooks}
        </span>
      </div>
      <span className="flex-1"></span>
      <div className="relative self-start top-0 right-0 border-white border-solid border-2 pt-1 pl-[6px] aspect-square w-8 h-8 rounded-full cursor-pointer hover:bg-[#FFF7] ">🖍</div>
    </div>
  )
}
export default Collection