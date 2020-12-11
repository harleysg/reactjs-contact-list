import { useSelector } from "react-redux"

import { Pagination, Heading, Section, Wrapper } from "../Components";

export function Favorites() {
  const contacts = useSelector(state => state.contacts.favorites)
  
  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section>
        <Pagination
          field="favorites"
          data={contacts}
          itemsPerPage={8}
          startFrom={1}
        />
      </Section>
    </Wrapper>
  );
}
