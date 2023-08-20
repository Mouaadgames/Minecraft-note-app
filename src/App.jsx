import Login_Register from "./pages/Login-Register/Login_Register"
import UserCollections from "./pages/collections/userCollections"
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
      <Route path="/bookshelves/:collectionId" element={<h1>here we go</h1>} />
    </Route>
  )
)

function App() {

  return (
    <main className=" h-screen text-white ">
      <RouterProvider router={router} />
    </main>
  )
}

export default App
