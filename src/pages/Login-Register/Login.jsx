import Button from "../../components/Button"
import OrSeparator from "./OrSeparator"
import LoginForm from "./LoginForm"
import sendFormDataTo from "../../utils/formData";
import { useState } from "react";

function Login({ loginScreen, setLoginScreen }) {
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);
  // console.log(window.location.assign(window.location.hostname + "/"));

  function errorHandler(statusCode) {
    switch (statusCode) {
      case 400:
        setErr("username not accepted")
        break;
      case 404:
        setErr("username dose not exist")
        break;
      case 406:
        setErr("username or password is wrong")
        break;

      default:
        break;
    }
  }
  async function LoginSubmitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    let formData = new FormData(e.target)
    let data = Object.fromEntries(formData.entries())
    const respond = await sendFormDataTo("http://localhost:3000/login", data)

    if (!respond.ok) {
      setSubmitting(false)
      return errorHandler(respond.status)
    }
    const jwt = (await respond.json()).jwt
  }
  return (
    <div className=" relative -translate-x-1/2 items-center flex-col">
      <div className=" flex items-center flex-col w-fit">
        <h2 className="text-5xl mt-5 mb-3">Sing In</h2>
        <LoginForm isSubmitting={submitting} err={err} setErr={setErr} loginScreen={loginScreen} onSubmitHandler={LoginSubmitHandler} />
        <span className="text-neutral-400 ">You don't have an account? <button tabIndex={-!loginScreen} className="text-neutral-200 hover:text-neutral-50 underline-offset-2 underline cursor-pointer" onClick={() => { window.history.pushState("", "", "/register"); setLoginScreen(false) }}>Create One</button> </span>
        <OrSeparator />
        <Button onClick={(e) => { fetch("http://localhost:3000/") }} tabIndex={-!loginScreen} text="Use it as a Guest" />
        <span className="text-neutral-400 leading-none mt-1 max-w-[250px] text-center">You will go to a pre-configured environment to discover and play around with the app</span>
      </div>
    </div>)
}
export default Login