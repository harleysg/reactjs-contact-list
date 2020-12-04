import * as React from "react";
import { useSelector } from "react-redux"

import { CardList, Heading, Section, Wrapper } from "../Components";

export default function Overview() {
  const { contacts, favorites } = useSelector(state => ({
    contacts: state.contacts.all,
    favorites: state.contacts.favorites
  }))
  
  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section scroll="x">
        <CardList display="flex" data={favorites.slice(0, 4)} field="favorites"/>
      </Section>
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <CardList data={contacts} field="overview"/>
      </Section>
    </Wrapper>
  );
}
