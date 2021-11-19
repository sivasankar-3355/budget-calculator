import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

export const ExpenseItem = ({ expense, expenses, setExpenses, editHandle }) => {
  const { id, charge, amount } = expense;

  const deleteItem = (id) => {
    const filteredArray = expenses.filter((x) => {
      return x.id !== id;
    });
    setExpenses(filteredArray);
  };

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => editHandle(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="clear button"
          onClick={() => deleteItem(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
