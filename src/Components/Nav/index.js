import React from "react";

import { Menu } from "./styles";

import MenuItem from "./NavItem";

export default function Nav() {
  return (
    <Menu>
      <MenuItem exact text="Overview" type="link" to="/"/>
      <MenuItem exact text="Contact" type="link" to="/contact"/>
      <MenuItem exact text="Favorites" type="link" to="/favorites"/>
      <MenuItem text="new" type="button" theme="solid" icon="add" event={() => console.log(`.....`)}/>
    </Menu>
  );
}
