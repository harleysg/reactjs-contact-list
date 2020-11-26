import React from "react";

import { Menu } from "./styles";

import MenuItem from "./NavItem";

export default function Nav({ data = [] }) {
  return (
    <Menu>
      {data.map((item) => (
        <MenuItem exact key={item.id} {...item} />
      ))}
    </Menu>
  );
}
