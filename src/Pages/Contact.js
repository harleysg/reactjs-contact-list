import React from "react";

import { Card, CardList, Heading, Section, Wrapper } from "../Components";

const CONTACTS = [
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
    name: "Daniela",
    email: "daniela@globant.com",
    favorite: true
  },
  {
    id: 5,
    name: "nathalia",
    email: "nathalia@globant.com",
    favorite: false
  },
  {
    id: 6,
    name: "Mickey",
    email: "mouse@globant.com",
    favorite: false
  },
  {
    id: 7,
    name: "Nicole",
    email: "nicole@globant.com",
    favorite: false
  },
  {
    id: 8,
    name: "Angela",
    email: "angela@globant.com",
    favorite: true
  }
];

export function Contact() {
  return (
    <Wrapper space="2">
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <CardList>
          {CONTACTS.map((item, i) => (
            <Card key={`${item.id}`} {...item} />
          ))}
          {CONTACTS.map((item, i) => (
            <Card key={`${item.id}`} {...item} />
          ))}
        </CardList>
      </Section>
    </Wrapper>
  );
}
