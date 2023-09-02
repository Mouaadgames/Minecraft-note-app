import axios from "axios";
const URL = "http://localhost:3000/graphql"
//add security checking
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

export async function getCollection(jwt, collectionId) {
  const query = `
  {
    collection(id: "${collectionId}") {
      name
      globalWriteAccess
      bookshelves {
        id
        name
        filledPlaces
      }
    }
  }`
  const r = (await axios.post(URL, { jwt, query }))
  console.log(r);
  return r.data.data
}
export async function getCollectionInfo(jwt, collectionId) {
  const query = `
  {
    collection(id: "${collectionId}") {
      id
      name
      description
      numberOfBooks
      sharedWith
      globalWriteAccess
    }
  }`

  return (await axios.post(URL, { jwt, query })).data.data
}

export async function GetBookshelfInfo(jwt, bookshelfId) {
  const query = `
  {
    bookshelf(id:"${bookshelfId}"){
      name
      books{
        isHidden
        icon
        title
      }
    }
  }
  `

  return (await axios.post(URL, { jwt, query })).data.data.bookshelf 
}

export async function AddCollection(jwt, collectionData = { radioButton: "", isShared: false, usernames: "", description: "", title: "" }) {
  const query = `
  mutation addCollection{
    addCollection(name:"${collectionData.title}",description:"${collectionData.description}",sharedWith:${JSON.stringify(collectionData.usernames.split(","))},globalWriteAccess:${collectionData.isShared ? (!!(collectionData.radioButton - 1)) : null}  )
  }`
  console.log("try to add")

  return (await axios.post(URL, { jwt, query, operationName: "addCollection" })).data.data.addCollection

}

export async function editCollection(jwt, collectionData = { id, radioButton, isShared, usernames, description, title }, refetchFn) {
  console.log("edit req", collectionData); // wyh this is undefined
  const query = `
  mutation editCollection{
    editCollection(
      collectionId:"${collectionData.id}"
      ${collectionData.title !== undefined ? `,name:"${collectionData.title}"` : ""}
      ,description:"${collectionData.description}"
      ${collectionData?.isShared === true ?
      `${collectionData?.radioButton ?
        `,globalWriteAccess:${collectionData?.radioButton === 2}` : ""}
        ${collectionData?.usernames !== undefined ? `,sharedWith:${JSON.stringify(collectionData?.usernames.split(","))}` : ""}` : ",sharedWith:[]"}
      )
  }`
  return (await axios.post(URL, { jwt, query, operationName: "editCollection" })).data.data?.editCollection;

}


