import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  let oneLengthItem=props.items.length===1&&<h2 className="expenses-list__fallback">Only one expense found .Please Add more.</h2>

  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
          />
        );
      })}
      {
        oneLengthItem
      }
    </ul>
  );
};

export default ExpensesList;