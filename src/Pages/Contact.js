import { CardList, Heading, Pagination, Section, Wrapper } from "../Components";
import { useContacts } from "../Hooks";

export function Contact() {
  const {isLoading, list: {data = []}} = useContacts()
  
  return (
    <Wrapper space="2">
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <CardList loading={isLoading} data={data} />
      </Section>
      <Section>
        <Pagination />
      </Section>
    </Wrapper>
  );
}
