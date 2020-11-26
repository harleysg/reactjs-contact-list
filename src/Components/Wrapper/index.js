import * as React from "react";
import { string as isString } from "prop-types";
import { WrapperStyled } from "./styles";

export function Wrapper(props) {
  return (
    <WrapperStyled
      space={props.space}
      style={{
        display: props.flex ? "flex" : "block",
        justifyContent: props.justifyContent || "flex-start",
        flexDirection: props.flexDirection || "row",
        flexGrow: props.flexGrow || 0,
        flexBasis: props.flexBasis || "auto",
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || "nowrap",
        flex: props.flex || "0 1 auto",
        alignItems: props.alignItems || "stretch",
        margin: props.margin || "0",
        width: props.width || "100%",
        height: props.height || "auto",
        maxWidth: props.maxWidth || "none"
      }}
    >
      {props.children}
    </WrapperStyled>
  );
}

Wrapper.propTypes = {
  space: isString
};
