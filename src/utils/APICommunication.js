import axios from "axios";
const URL = "http://localhost:3000/graphql"

// collection manipulation
export async function getCollections(jwt) {
  const query = `#graphql
  {
    user{
      collectionOwned{
        id
        name
        description
        numberOfBooks
        sharedWith
        globalWriteAccess
      }
      collectionShared{
        id
        name
        description
        numberOfBooks
        sharedWith
        globalWriteAccess
      }
    }
  }`
  return (await axios.post(URL, { jwt, query })).data.data
}

export async function  getCollection(jwt, collectionId) {
  const query = `
  {
    collection(id: "${collectionId}") {
      name
      globalWriteAccess
      bookshelves {
        name
        filledPlaces
      }
    }
  }`
  return (await axios.post(URL, { jwt, query })).data.data
}

export async function AddCollection(jwt, collectionData = { radioButton: "", isShared: false, usernames: "", description: "", title: "" }) {
  const query = `
  mutation addCollection{
    addCollection(name:"${collectionData.title}",description:"${collectionData.description}"  ){
      id
    }
  }`

  return (await axios.post(URL, { jwt, query })).data.data
}

export function editCollection(jwt, collectionData = { collectionId: "", radioButton: "", isShared: false, usernames: "*", description: "", title: "" }) {

}


