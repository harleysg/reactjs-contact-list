import * as React from "react";

import { Card, CardList, Heading, Section, Wrapper } from "../Components";

const FAVORITES = [
  {
    id: 1,
    name: "Tio Rico",
    email: "macPato@disney.com",
    favorite: false
  },
  {
    id: 2,
    name: "Mickey Mouse",
    email: "raton@disney.com",
    favorite: false
  },
  {
    id: 3,
    name: "Minnie Mouse",
    email: "ratona@disney.com",
    favorite: false
  },
  {
    id: 4,
    name: "Pluto",
    email: "dog@disney.com",
    favorite: true
  }
];

export default function Overview() {
  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section scroll="x">
        <CardList display="flex">
          {FAVORITES.map((item, i) => (
            <Card key={`${item.id}`} {...item} />
          ))}
        </CardList>
      </Section>
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <CardList>
          {FAVORITES.map((item, i) => (
            <Card key={`${item.id}`} {...item} />
          ))}
          {FAVORITES.map((item, i) => (
            <Card key={`${item.id}`} {...item} />
          ))}
        </CardList>
      </Section>
    </Wrapper>
  );
}
