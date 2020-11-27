import React from "react";

import { CardList, Heading, Pagination,Section, Wrapper } from "../Components";
import { useContacts } from "../Hooks";

// const FAVORITES = [
//   {
//     id: 1,
//     name: "Tio Rico",
//     email: "macPato@disney.com",
//     favorite: true
//   }
// ];

export function Favorites() {
  const {isLoading, list: {data = []}} = useContacts()
  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section>
        <CardList loading={isLoading} data={data} />
      </Section>
      <Section>
        <Pagination />
      </Section>
    </Wrapper>
  );
}
