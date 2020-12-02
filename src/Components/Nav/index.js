import React from "react";
import { func as isFunc } from "prop-types"

import { Menu } from "./styles";

import MenuItem from "./NavItem";

export default function Nav({action}) {
  return (
    <Menu>
      <MenuItem exact text="Overview" type="link" to="/"/>
      <MenuItem exact text="Contact" type="link" to="/contact"/>
      <MenuItem exact text="Favorites" type="link" to="/favorites"/>
      <MenuItem text="new" type="button" theme="solid" icon="add" event={() => action()}/>
    </Menu>
  );
}

Nav.propTypes = {
  action: isFunc.isRequired
}