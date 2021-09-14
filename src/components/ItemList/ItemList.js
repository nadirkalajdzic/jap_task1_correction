import React from "react";

import ItemCard from "../ItemCard/ItemCard";
import Button from "@material-ui/core/Button";

import { useStyles } from "../ItemCard/Style";
import "./ItemList.css";

function ItemList({ itemList, setPageNumber }) {
  const classes = useStyles();

  const showMore = () => setPageNumber((prevState) => prevState + 1);

  return (
    <div className="item-list">
      <div className="item-item-list">
        {itemList.map((x, index) => {
          return (
            <div className="single-item" key={index}>
              <ItemCard item={x} />
            </div>
          );
        })}
      </div>
      <div
        className={`item-list-show-more ${
          itemList.length % 10 > 0 && "hidden"
        }`}
      >
        <Button
          variant="outlined"
          className={classes.button}
          onClick={showMore}
        >
          VIEW MORE RESULTS
        </Button>
      </div>
    </div>
  );
}

export default ItemList;
