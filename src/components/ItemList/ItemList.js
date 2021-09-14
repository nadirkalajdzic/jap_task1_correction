import React from "react";

import ItemCard from "../ItemCard/ItemCard";
import Button from "@material-ui/core/Button";
import { Virtuoso } from "react-virtuoso";

import "./ItemList.css";
import styled from "styled-components";

function ItemList({ itemList, setPageNumber }) {
  const showMore = () => setPageNumber((prevState) => prevState + 1);

  return (
    <Virtuoso
      className="item-list"
      style={{ height: 600 }}
      data={itemList}
      totalCount={itemList.length}
      itemContent={(index, item) => <ItemCard item={item} />}
      components={{
        Footer: () => {
          return (
            itemList.length % 10 <= 0 && (
              <div className="item-list-show-more">
                <Button
                  variant="outlined"
                  style={{
                    color: "white",
                    backgroundColor: "var(--button-color)",
                  }}
                  onClick={showMore}
                >
                  VIEW MORE RESULTS
                </Button>
              </div>
            )
          );
        },
      }}
    />
  );
}

export default ItemList;
