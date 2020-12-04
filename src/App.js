import * as React from "react";
import { useGetContacts, useLocalStorage } from "./Hooks"

import Routes from "./Routes";
import Styles from "./assets/styles";

function App() {
  const { contacts } = useGetContacts()
  const { setItem, removeItem } = useLocalStorage()

  React.useEffect(() => {
    setItem("contacts", JSON.stringify(contacts))
    return () => {
      removeItem("contacts")
    }
  }, [setItem, removeItem, contacts])

  return (
    <>
      <Styles />
      <Routes />
    </>
  );
}

export default App;
