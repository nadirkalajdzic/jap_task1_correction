import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Virtuoso } from "react-virtuoso";
import "./ItemList.css";
import CustomButton from "../CustomButton/CustomButton";

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
                <CustomButton
                  variant="outlined"
                  style={{
                    color: "white",
                    backgroundColor: "var(--button-color)",
                    width: 200,
                  }}
                  onClick={showMore}
                  label="VIEW MORE RESULTS"
                />
              </div>
            )
          );
        },
      }}
    />
  );
}

export default ItemList;
