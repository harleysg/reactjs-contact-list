import { useSelector } from "react-redux"

import usePagination from "../Hooks/usePagination";

import { Heading, Section, Wrapper, CardList, Pagination } from "../Components";

export function Contact() {
  const contacts = useSelector(state => state.contacts.all)

  const { sliceData, prevPage, nextPage, pages, currentPage, minimunItem } = usePagination({
    data: contacts,
    itemsPerPage: 8
  });
  
  return (
    <Wrapper space="2">
      <Heading title="Contacts" bg="var(--color_primary)" />
      <Section>
        <CardList data={sliceData} field="contacts_list"/>
        <Pagination currentPage={currentPage} nextPage={nextPage} pages={pages} prevPage={prevPage} minimunItem={minimunItem} />
      </Section>
    </Wrapper>
  );
}
