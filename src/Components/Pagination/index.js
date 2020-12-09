import * as React from "react";

import { Body, Controls, Wrapper, Buttons, Navigator, Info } from "./styles";

import usePagination from "../../Hooks/usePagination";

import { CardList } from "../index"
import { Empty } from "../Empty";

export default function Pagination({ data, itemsPerPage, startFrom, field }) {

  const { sliceData, prevPage, nextPage, pages, currentPage, minimunItem, isEmpty } = usePagination({
    data,
    itemsPerPage,
    startFrom
  });
  
  return (
    <>
      {
        isEmpty
          ? <Wrapper>
              <Empty />
            </Wrapper>
          : (<Wrapper>
              <Body>
                <CardList data={sliceData} field={field}/>
              </Body>
              {
                minimunItem
                  ? <Controls>
                      <Info> {currentPage} / {pages} </Info>
                      <Navigator>
                        <Buttons
                          disabled={isEmpty ? true : currentPage === 1 ? true : false}
                          onClick={(e) => prevPage(e)}
                        >
                          <span title="Prev page">{"<"}</span>
                        </Buttons>
                        <Buttons
                          disabled={isEmpty ? true : currentPage === pages ? true : false}
                          onClick={(e) => nextPage(e)}
                        >
                          <span title="Next page">{">"}</span>
                        </Buttons>
                      </Navigator>
                    </Controls>
                  : null
              }
            </Wrapper>)
      }
    </>
  );
}
