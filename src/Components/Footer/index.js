import React from "react";

import { Main } from "./styles";

import { Wrapper, Button } from "../index";

import connect from "./connect"

export default connect(Footer)

function Footer({restoreContacts}) {
  return <Main>
    <Wrapper space="2"
      flex alignItems="center"
      justifyContent="flex-end"
    >
      <Button label="dark mode" title="Change theme" onClick={() => console.log(":D")}></Button>
      <Button label="restore" title="Reset contacts state to default state" onClick={() => restoreContacts()}></Button>
    </Wrapper>
  </Main>;
}
