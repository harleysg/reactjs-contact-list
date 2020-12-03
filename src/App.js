import * as React from "react";
import { useGetContacts } from "./Hooks"

import Routes from "./Routes";
import Styles from "./assets/styles";

function App() {
  const { contacts } = useGetContacts()

  React.useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
    return () => {
      window.localStorage.removeItem("contacts")
    }
  }, [contacts])

  return (
    <>
      <Styles />
      <Routes />
    </>
  );
}

export default App;
