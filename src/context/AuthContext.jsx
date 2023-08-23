import { createContext, useState } from "react"
export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [jwt, setJwt] = useState("");
  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider