import { useState, useEffect } from "react";

export default function usePagination(initialState) {
  const { itemsPerPage = 5, data = [], startFrom = 1 } = initialState;
  const perPage = itemsPerPage ? itemsPerPage : 10;
  const dataLength = data.length;
  const isDisabled = !dataLength ? true : false
  const pages = Math.ceil(dataLength / perPage);
  const minimunItem = pages > 1

  const [currentPage, setCurrentPage] = useState(
    startFrom <= pages ? startFrom : 1
  );
  const [sliceData, setSliceData] = useState(
    [...data].slice((currentPage - 1) * perPage, currentPage * perPage)
  );
  const [isEmpty, setEmpty] = useState(false)

  
  useEffect(() => {
    setSliceData(
      [...data].slice((currentPage - 1) * perPage, currentPage * perPage)
    );
  }, [data, currentPage, setSliceData, perPage]);

  useEffect(() => {
    setEmpty(data.length === 0 ? true : false)
  }, [data, setEmpty])

  function changePage(page, event) {
    event.preventDefault();
    if (page !== currentPage) {
      setCurrentPage(page);
      setSliceData([...data].slice((page - 1) * perPage, page * perPage));
    }
  }

  function nextPage() {
    setCurrentPage((prevVal) => (prevVal === pages ? prevVal : prevVal + 1));
    if (currentPage !== pages) {
      setSliceData(
        [...data].slice(currentPage * perPage, (currentPage + 1) * perPage)
      );
    }
  }

  function prevPage() {
    setCurrentPage((prevVal) => (prevVal - 1 === 0 ? prevVal : prevVal - 1));
    if (currentPage !== 1) {
      setSliceData(
        [...data].slice(
          (currentPage - 2) * perPage,
          (currentPage - 1) * perPage
        )
      );
    }
  }

  return {
    nextPage,
    changePage,
    prevPage,
    sliceData,
    setSliceData,
    pages,
    currentPage,
    isDisabled,
    minimunItem,
    isEmpty
  };
}
