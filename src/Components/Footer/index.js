import React from "react";

import { Main } from "./styles";

import { Wrapper, Button } from "../index";
import { useTheme } from "../../Hooks";

import connect from "./connect"

export default connect(Footer)

function Footer({restoreContacts}) {
  const { isDark, setIsDark } = useTheme()
  
  return <Main>
    <Wrapper space="2"
      flex alignItems="center"
      justifyContent="flex-end"
      height="100%"
    >
      <Button label="dark mode" title="Change theme" onClick={() => setIsDark(!isDark)}></Button>
      <Button label="restore" title="Reset contacts state to default state" onClick={() => restoreContacts()}></Button>
    </Wrapper>
  </Main>;
}
