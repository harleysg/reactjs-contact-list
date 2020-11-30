import * as React from "react";

import { CardList, Heading, Section, Wrapper } from "../Components";
import { useContact } from "../Hooks";

const FAVORITES = [
  {
    id: 1,
    full_name: "Tio Rico",
    email: "macPato@disney.com",
    favorite: true
  },
  {
    id: 2,
    full_name: "Mickey Mouse",
    email: "raton@disney.com",
    favorite: true
  },
  {
    id: 3,
    full_name: "Minnie Mouse",
    email: "ratona@disney.com",
    favorite: true
  },
  {
    id: 4,
    full_name: "Pluto",
    email: "dog@disney.com",
    favorite: true
  }
];

export default function Overview() {
  
  const {isLoading, contacts} = useContact()

  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section scroll="x">
        <CardList display="flex" data={FAVORITES} field="favorites"/>
      </Section>
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <CardList loading={isLoading} data={contacts} field="overview"/>
      </Section>
    </Wrapper>
  );
}
