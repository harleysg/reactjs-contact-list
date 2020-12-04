import React from "react";
import { func as isFunc } from "prop-types"

import { Menu } from "./styles";

import MenuItem from "./NavItem";

import connect from "./connect"

export default connect(Nav)

function Nav({handleShowForm}) {
  return (
    <Menu>
      <MenuItem exact text="Overview" type="link" to="/"/>
      <MenuItem exact text="Contact" type="link" to="/contact"/>
      <MenuItem exact text="Favorites" type="link" to="/favorites"/>
      <MenuItem text="new" type="button" theme="solid" icon="add"
        event={() => handleShowForm(true)}
      />
    </Menu>
  );
}

Nav.propTypes = {
  handleShowForm: isFunc.isRequired
}