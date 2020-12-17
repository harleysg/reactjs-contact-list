import React, { useCallback } from "react";
import { useDispatch } from "react-redux"

import reducer from "../../Redux/Reducers/contacts.reducer"
import { Button, Avatar } from "../index";
import { CardStyled, Title, Email, Actions, Body, CardSkeletonStyled, Hr } from "./styles";

export default function Card(props) {
  const { full_name: name, email, avatar, favorite, field } = props
  
  const dispatch = useDispatch()

  const handleFav = useCallback((contact) => {
    if(contact.favorite !== true){
      dispatch(reducer.action.add_favorites(contact))
    } else {
      dispatch(reducer.action.remove_favorites(contact))
    }
  }, [dispatch])
  
  return (
    <CardStyled>
      <Avatar src={avatar} alt={`Avatar of ${name}`} rounded active={favorite} />
      <Body>
        <Title>{name}</Title>
        <Email>{email}</Email>
      </Body>
      <Hr />
      <Actions>
        <Button
          label={ (field === "favorites" && favorite) ? "Remove" : null }
          icon={favorite ? "close" : "love"}
          className={`${favorite ? "c-btn-remove" : ""}`}
          onClick={() => handleFav(props)}
        />
        {
          field === "contacts_list"
            ? <Button
                icon="trash"
                className="c-btn-delete"
                onClick={ () => dispatch(reducer.action.delete_contact(props))}
              />
            : null
        }
      </Actions>
    </CardStyled>
  );
}

export function CardSkeleton({ full_name: name, avatar }) {
  return (
    <CardSkeletonStyled>
      <Avatar src={avatar} alt={`Avatar ${name}`} rounded />
      <Body>
        <Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Title>
        <Email>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Email>
      </Body>
      <Actions>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </Actions>
    </CardSkeletonStyled>
  );
}
