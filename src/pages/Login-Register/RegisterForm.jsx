import InputField from "../../components/InputField"
import Button from "../../components/Button"
import { useState, useEffect } from "react";
function RegisterForm({ onSubmitHandler, loginScreen, err, setErr, isSubmitting }) {
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [confPasswordInputValue, setConfPasswordInputValue] = useState("");

  const [usernameIsValid, setUsernameIsValid] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState("");
  const [confPasswordIsValid, setConfPasswordIsValid] = useState("");
  useEffect(() => {
    setErr("")
  }, [usernameInputValue, passwordInputValue, confPasswordInputValue]);
  return (
    <form className="flex items-center flex-col w-fit" onSubmit={onSubmitHandler}>
      <InputField setIsValid={setUsernameIsValid} setInputValue={setUsernameInputValue} tabIndex={-!!loginScreen} type="text" hasALabel={true} label={"Username"} name={"username"} width={"240px"} validationRegex={/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/} />
      <InputField setIsValid={setPasswordIsValid} setInputValue={setPasswordInputValue} tabIndex={-!!loginScreen} type="password" hasALabel={true} label={"Password"} name={"password"} width={"240px"} validationRegex={/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/} />
      <InputField setIsValid={setConfPasswordIsValid} setInputValue={setConfPasswordInputValue} tabIndex={-!!loginScreen} validationRegex={RegExp("^" + passwordInputValue + "$")} type="password" hasALabel={true} label={"Confirm Password"} name={"confirmPassword"} width={"240px"} />
      <br />
      <span>{err}</span>
      <Button disable={!(usernameIsValid && passwordIsValid && confPasswordIsValid) || !!err ||isSubmitting} tabIndex={-!!loginScreen} text="Sing Up" />
    </form>
  )
}
export default RegisterForm