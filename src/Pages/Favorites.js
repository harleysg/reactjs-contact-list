import { useSelector } from "react-redux"

import usePagination from "../Hooks/usePagination";

import { Heading, Section, Wrapper, CardList, Pagination } from "../Components";

export function Favorites() {
  const contacts = useSelector(state => state.contacts.favorites)

  const { sliceData, prevPage, nextPage, pages, currentPage, minimunItem } = usePagination({
    data: contacts,
    itemsPerPage: 8
  });
  
  return (
    <Wrapper space="2">
      <Heading title="Favorites" bg="var(--color_primary)" />
      <Section>
        <CardList data={sliceData} field="favorites"/>
        <Pagination currentPage={currentPage} nextPage={nextPage} pages={pages} prevPage={prevPage} minimunItem={minimunItem} />
      </Section>
    </Wrapper>
  );
}
