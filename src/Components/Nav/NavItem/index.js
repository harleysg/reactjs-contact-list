import Button from "../../Button";
import Link from "../../Link";
import { MenuItem } from "./styles";

export default function Pepito({ action, text, type, onClick, ...others }) {
  return (
    <MenuItem>
      {type === "link" ? (
        <Link to={action} {...others}>{text}</Link>
      ) : (
        <Button onClick={onClick} label={text} {...others} />
      )}
    </MenuItem>
  );
}
