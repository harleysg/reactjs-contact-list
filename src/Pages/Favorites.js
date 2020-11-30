import React from "react";

import { CardList, Heading, Pagination,Section, Wrapper } from "../Components";
import { useContact } from "../Hooks";

export function Favorites() {
  const {isLoading, contacts} = useContact()
  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section>
        <CardList loading={isLoading} data={contacts} field="favorites"/>
      </Section>
      <Section>
        <Pagination />
      </Section>
    </Wrapper>
  );
}
