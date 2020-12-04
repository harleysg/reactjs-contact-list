
export function useLocalStorage(){

  function setItem(key, value){
    window.localStorage.setItem(value, JSON.stringify(key))
  }
  function removeItem(key){
    window.localStorage.removeItem(key)
  }
  function getItem(key){
    window.localStorage.getItem(key)
  }

  return {
    setItem,
    removeItem,
    getItem
  }
}