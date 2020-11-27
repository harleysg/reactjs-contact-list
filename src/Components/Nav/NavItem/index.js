import Button from "../../Button";
import Link from "../../Link";
import { MenuItem } from "./styles";

export default function NavItem({ to, text, type, event, ...others }) {
  return (
    <MenuItem>
      {type === "link" ? (
        <Link to={to} {...others}>{text}</Link>
      ) : (
        <Button onClick={event} label={text} {...others} />
      )}
    </MenuItem>
  );
}
