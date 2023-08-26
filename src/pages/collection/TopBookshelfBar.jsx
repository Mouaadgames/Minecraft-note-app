import PlateImg from "../../assets/img/plate.png"
import Button from "../../components/Button" 


function TopBookshelfBar() {
  return (
    <section className="mt-4 flex justify-between">
      <div className="relative flex justify-center items-center">
        <img className="w-52" src={PlateImg} alt="" />
        <span className="absolute text-3xl">title</span>
      </div>
      <Button text={"add book"}/>
    </section>
  )
}
export default TopBookshelfBar