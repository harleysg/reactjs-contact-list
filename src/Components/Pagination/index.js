import * as React from "react";

import { Controls, Wrapper, Buttons, Navigator, Info } from "./styles";

export default function Pagination({ prevPage, nextPage, pages, currentPage, minimunItem = true, labels = ["prev", "next"] }) {
  if(!minimunItem){
    return <></>
  }
  return (
    <Wrapper>
      <Controls>
        <Info>
          {currentPage} / {pages}
        </Info>
        <Navigator>
          <Buttons
            disabled={currentPage === 1 ? true : false}
            onClick={prevPage}
          >
            { labels[0] }
          </Buttons>
          <Buttons
            disabled={currentPage === pages ? true : false}
            onClick={nextPage}
          >
            { labels[1] }
          </Buttons>
        </Navigator>
      </Controls>
    </Wrapper>
  );
}
