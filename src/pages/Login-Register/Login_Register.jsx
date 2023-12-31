import HangUpSing from "../../components/hangUpSing"
import BackShadow from "./BackShadow"
import Login from "./Login"
import Register from "./Register";
import { useState, useEffect } from "react";
function Login_Register() {
  const [loginScreen, setLoginScreen] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/login") {
      setLoginScreen(true)
    }
    
    if (window.location.pathname === "/register") {
      setLoginScreen(false)
    }
    
  }, []);
  
  return (
    <div className="bg-repeat relative overflow-x-hidden bg-[10px] h-screen bgDirtImg z-40">
      <BackShadow />
      <HangUpSing
        text="Minecraft note app"
      />
      <div className={`flex relative transition-transform duration-700 ease-in-out ${loginScreen ? "translate-x-1/2" : "-translate-x-1/2"} justify-between`}>
        <Login loginScreen={loginScreen} setLoginScreen={setLoginScreen} />
        <Register loginScreen={loginScreen} setLoginScreen={setLoginScreen} />
      </div>

    </div>
  )
}
export default Login_Register