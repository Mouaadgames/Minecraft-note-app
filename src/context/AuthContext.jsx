import { createContext, useState, useEffect } from "react"
export const AuthContext = createContext();
import useLocalStorage from "../hooks/useLocalStorage";
function AuthContextProvider(props) {
  const [getJwtToLocalStorage] = useLocalStorage("jwtToken")
  const [jwt, setJwt] = useState(getJwtToLocalStorage());
  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider