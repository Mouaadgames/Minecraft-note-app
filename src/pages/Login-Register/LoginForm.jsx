import Button from "../../components/Button"
import InputField from "../../components/InputField"
import { useState, useEffect } from "react";
function LoginForm({ onSubmitHandler, loginScreen, err, setErr, isSubmitting }) {
  console.log(err);
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  useEffect(() => {
    setErr("")
  }, [usernameInputValue, passwordInputValue]);

  console.log(!(usernameIsValid && passwordIsValid));

  return (
    <form className="flex items-center flex-col w-fit" onSubmit={onSubmitHandler}>
      <InputField setIsValid={setUsernameIsValid} setInputValue={setUsernameInputValue} tabIndex={-!loginScreen} type="text" hasALabel={true} label={"Username"} name={"username"} width={"240px"} validationRegex={/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/} />
      <InputField setIsValid={setPasswordIsValid} setInputValue={setPasswordInputValue} tabIndex={-!loginScreen} type="password" hasALabel={true} label={"Password"} name={"password"} width={"240px"} validationRegex={/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/} />
      <a tabIndex={-!loginScreen} href="/forget" className="text-neutral-400 self-end hover:text-neutral-200 pr-1  ">forget password?</a>
      <span className="text-red-500">{err}</span>
      <Button disable={!(usernameIsValid && passwordIsValid) || !!err || isSubmitting} tabIndex={-!loginScreen} text="Login" submit={true} />
    </form>
  )
}
export default LoginForm