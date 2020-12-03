import { useSelector } from "react-redux"
import { CardList, Heading, Pagination, Section, Wrapper } from "../Components";

export function Contact() {
  const contacts = useSelector(state => state.contacts.all)
  
  return (
    <Wrapper space="2">
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <CardList data={contacts} field="contacts_list"/>
      </Section>
      <Section>
        <Pagination />
      </Section>
    </Wrapper>
  );
}
