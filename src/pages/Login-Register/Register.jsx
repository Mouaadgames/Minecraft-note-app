import Button from "../../components/Button"
import OrSeparator from "./OrSeparator"
import RegisterForm from "./RegisterForm";
import sendFormDataTo from "../../utils/formData";
import { useState } from "react";
function Register({ setLoginScreen, loginScreen }) {

  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);
  function errorHandler(statusCode) {
    switch (statusCode) {
      case 400:
        setErr("username or password are not accepted")
        break;
      case 409:
        setErr("username already exist")
        break;

      default:
        break;
    }
  }

  async function registerHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    let formData = new FormData(e.target)
    let data = Object.fromEntries(formData.entries())
    console.log(data);
    const respond = await sendFormDataTo("http://localhost:3000/signup", data)
    if (!respond.ok) {
      setSubmitting(false)
      return errorHandler(respond.status)
    }
    console.log(await respond.json())
  }
  return (
    <div className="relative translate-x-1/2 flex items-center flex-col" >
      <div className=" flex items-center flex-col w-fit">
        <h2 className="text-5xl mt-5 mb-3">Sing Up</h2>
        <RegisterForm isSubmitting={submitting} setErr={setErr} err={err} onSubmitHandler={registerHandler} loginScreen={loginScreen} />
        <span className="text-neutral-400 ">I already have an account - <button tabIndex={-!!loginScreen} onClick={() => { setLoginScreen(true) }} className="text-neutral-200 hover:text-neutral-50 underline-offset-2 underline">Login</button> </span>
        <OrSeparator />
        <Button tabIndex={-!!loginScreen} text="Use it as a Guest" />
        <span className="text-neutral-400 leading-none mt-1 max-w-[250px] text-center">You will go to a pre-configured environment to discover and play around with the app</span>
      </div>
    </div >
  )
}
export default Register