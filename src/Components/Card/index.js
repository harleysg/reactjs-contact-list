import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux"

import { ADD_FAVORITES, REMOVE_FAVORITES, DELETE_CONTACTS } from "../../Redux/Actions"
import { Button, Avatar } from "../index";
import { CardStyled, Title, Email, Actions, Body, CardSkeletonStyled, Hr } from "./styles";

export default function Card(props) {
  const { full_name: name, email, avatar, favorite, field } = props
  
  const dispatch = useDispatch()
  const [fav, setFav] = useState(favorite)

  useEffect(() => {
    setFav(favorite)
  }, [favorite])

  const handleFav = useCallback((contact) => {
    if(contact.favorite !== true){
      dispatch(ADD_FAVORITES(contact))
      setFav(true)
    } else {
      dispatch(REMOVE_FAVORITES(contact))
      setFav(false)
    }
  }, [setFav, dispatch])
  
  return (
    <CardStyled>
      <Avatar src={avatar} alt={`Avatar of ${name}`} rounded active={fav} />
      <Body>
        <Title>{name}</Title>
        <Email>{email}</Email>
      </Body>
      <Hr />
      <Actions>
        <Button
          label={ (field === "favorites" && fav) ? "Remove" : null }
          icon={fav ? "close" : "love"}
          className={`${fav ? "c-btn-remove" : ""}`}
          onClick={() => handleFav(props)}
        />
        {
          field === "contacts_list"
            ? <Button
                icon="trash"
                className="c-btn-delete"
                onClick={ () => dispatch(DELETE_CONTACTS(props.id))}
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
