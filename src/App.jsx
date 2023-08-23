// pages
import Login_Register from "./pages/Login-Register/Login_Register"
import UserCollections from "./pages/collections/userCollections"
import CollectionInterface from "./pages/collection/CollectionInterface"
// hooks
import useWindowSize from "./hooks/useWindowSize"
import AuthContextProvider from "./context/AuthContext"
// errors 
import SmallWindowSizeError from "./pages/Errors/SmallWindowSizeError"
import { useState } from "react"
//for routes handling 
import {
  Route,
  Link,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<h1 className="bg-black text-center text-7xl">hello world!</h1>} />
      <Route path="/home" element={<h1 className="bg-black text-center text-7xl">hello world!</h1>} />
      <Route path='/login' element={<Login_Register />} />
      <Route path='/register' element={<Login_Register />} />
      <Route path="/collections" element={<UserCollections />} />
      <Route path="/collection/:collectionId" element={<CollectionInterface />} />
    </Route>
  )
)

function App() {
  const [ignoredSizeError, setIgnoredSizeError] = useState(false);
  const windowSize = useWindowSize()
  return (
    <main className=" h-screen text-white ">
      {
        (!ignoredSizeError && windowSize.width < 480 && windowSize.width > 0) ? (<SmallWindowSizeError setIgnoredSizeError={setIgnoredSizeError} />) : ""
      }
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </main>
  )
}

export default App
