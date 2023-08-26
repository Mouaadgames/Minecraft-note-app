import Button from "../../../components/Button"
import BgForControlBar from "./BgForControlBar"
import InputField from "../../../components/InputField"
import AvatarButton from "./AvatarButton"
import useLocalStorage from "../../../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"
function ControlBar({ setSearch, openModal }) {
  const [_, setJwt] = useLocalStorage("jwtToken")
  const navigate = useNavigate()
  return (
    <div className="relative top-0 gap-3 flex items-center justify-between py-3 ">
      <BgForControlBar />
      <Button onClick={openModal} className={"ml-3"} text={"New Collection"} />
      <InputField name={"search"} type={"text"} setInputValue={setSearch} className="flex-grow max-w-xl " />
      <AvatarButton onClick={() => { setJwt("");navigate("/login")}} />
    </div>
  )
}
export default ControlBar