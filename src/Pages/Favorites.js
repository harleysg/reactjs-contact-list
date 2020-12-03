import { useSelector } from "react-redux"

import { CardList, Heading, Pagination,Section, Wrapper } from "../Components";

export function Favorites() {
  const contacts = useSelector(state => state.contacts.favorites)
  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section>
        <CardList data={contacts} field="favorites"/>
      </Section>
      <Section>
        <Pagination />
      </Section>
    </Wrapper>
  );
}
