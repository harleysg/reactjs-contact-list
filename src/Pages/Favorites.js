import React from "react";

import { Card, CardList, Heading, Section, Wrapper } from "../Components";

const FAVORITES = [
  {
    id: 1,
    name: "Tio Rico",
    email: "macPato@disney.com",
    favorite: true
  },
  {
    id: 2,
    name: "Mickey Mouse",
    email: "raton@disney.com",
    favorite: true
  },
  {
    id: 3,
    name: "Minnie Mouse",
    email: "ratona@disney.com",
    favorite: true
  },
  {
    id: 4,
    name: "Daniela",
    email: "daniela@globant.com",
    favorite: true
  },
  {
    id: 5,
    name: "nathalia",
    email: "nathalia@globant.com",
    favorite: true
  },
  {
    id: 6,
    name: "Mickey",
    email: "mouse@globant.com",
    favorite: true
  },
  {
    id: 7,
    name: "Nicole",
    email: "nicole@globant.com",
    favorite: true
  },
  {
    id: 8,
    name: "Angela",
    email: "angela@globant.com",
    favorite: true
  }
];

export function Favorites() {
  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section>
        <CardList>
          {FAVORITES.map((item) => (
            <Card key={`${item.id}`} {...item} />
          ))}
          {FAVORITES.map((item) => (
            <Card key={`${item.id}`} {...item} />
          ))}
        </CardList>
      </Section>
    </Wrapper>
  );
}
