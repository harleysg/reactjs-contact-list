
export function useLocalStorage() {

  function setItem(key, value) {
    window.localStorage.setItem(key, value)
  }
  function removeItem(key) {
    window.localStorage.removeItem(key)
  }
  function getItem(key) {
    const data = window.localStorage.getItem(key)
    return data
  }

  return {
    setItem,
    removeItem,
    getItem
  }
}