
export function useLocalStorage() {

  function setItem (key, value) {
    const data = window.localStorage.setItem(key, value)
    return data
  }
  function getItem (key) {
    const data = window.localStorage.getItem(key)
    return data
  }
  function removeItem (key) {
    const data = window.localStorage.removeItem(key)
    return data
  }

  return {
    setItem,
    removeItem,
    getItem
  }
}