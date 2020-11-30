import { CardList, Heading, Pagination, Section, Wrapper } from "../Components";
import { useContact } from "../Hooks";

export function Contact() {
  const {isLoading, contacts} = useContact()
  
  return (
    <Wrapper space="2">
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <CardList loading={isLoading} data={contacts} field="contacts_list"/>
      </Section>
      <Section>
        <Pagination />
      </Section>
    </Wrapper>
  );
}
