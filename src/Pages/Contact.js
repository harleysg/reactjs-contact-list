import { useSelector } from "react-redux"
import { Heading, Pagination, Section, Wrapper } from "../Components";

export function Contact() {
  const contacts = useSelector(state => state.contacts.all)
  
  return (
    <Wrapper space="2">
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <Pagination
          field="contacts_list"
          data={contacts}
          itemsPerPage={8}
          startFrom={1}
        />
      </Section>
    </Wrapper>
  );
}
