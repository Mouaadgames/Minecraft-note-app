import ControlBar from "./ControlBar/ControlBar.jsx"
import Collection from "./Collection.jsx"
const dummyData = [
  { name: "mouaad's Collection", description: "no description is provided", numOfBooks: 30 },
  { name: "the collection Shared", description: "", numOfBooks: 3 },
  { name: "first One", description: "", numOfBooks: 40 },
  { name: "hello world!", description: "", numOfBooks: 1 },
  { name: "Subjects", description: " contains all the school subjects", numOfBooks: 64 },
  { name: "an other collection", description: "just for testing purposes", numOfBooks: 23 },
  { name: "the name", description: "tiered of writing", numOfBooks: 12 },
  { name: "mouaad's Collection", description: "no description is provided", numOfBooks: 30 },
  { name: "the collection Shared", description: "", numOfBooks: 3 },
  { name: "first One", description: "", numOfBooks: 40 },
  { name: "hello world!", description: "", numOfBooks: 1 },
  { name: "Subjects", description: " contains all the school subjects", numOfBooks: 64 },
  { name: "an other collection", description: "just for testing purposes", numOfBooks: 23 },
  { name: "the name", description: "tiered of writing", numOfBooks: 12 },
  { name: "mouaad's Collection", description: "no description is provided", numOfBooks: 30 },
  { name: "the collection Shared", description: "", numOfBooks: 3 },
  { name: "first One", description: "", numOfBooks: 40 },
  { name: "hello world!", description: "", numOfBooks: 1 },
  { name: "Subjects", description: " contains all the school subjects", numOfBooks: 64 },
  { name: "an other collection", description: "just for testing purposes", numOfBooks: 23 },
  { name: "the name", description: "tiered of writing", numOfBooks: 12 },
]

function UserCollections() {
  return (
    <div className="bg-repeat bgWoodImg flex flex-col h-screen">
      <ControlBar />
      <div className="pt-4 px-4 flex flex-col flex-wrap gap-5 overflow-x-auto overflow-y-hidden  flex-1">

      {
        dummyData.map((collection, i) => {
          return (<Collection key={i} name={collection.name} description={collection.description} numOfBooks={collection.numOfBooks} />)
        })
      }
      </div>
    </div>
  )
}
export default UserCollections