function useLocalStorage(name) {
  function getItems() {
    return localStorage.getItem(name);
  }

  function setItemsToStorage(data) {
    return localStorage.setItem(name, data)
  }

  return [getItems, setItemsToStorage]
}
export default useLocalStorage