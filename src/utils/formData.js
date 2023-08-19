export default async function sendFormDataTo(endPoint, { username, password }) {
  return await fetch(endPoint, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    }
  })
}