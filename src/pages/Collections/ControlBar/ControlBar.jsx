import Button from "../../../components/Button"
import BgForControlBar from "./BgForControlBar"
import InputField from "../../../components/InputField"
import AvatarButton from "./AvatarButton"
function ControlBar() {
  return (
    <div className="relative top-0 gap-3 flex items-center justify-between py-3 ">
      <BgForControlBar/>
      <Button className={"pl-3"} text={"New Collection"} />
      <InputField name={"search"} type={"text"} className="flex-grow max-w-xl "/>
      <AvatarButton/>
    </div>
  )
}
export default ControlBar