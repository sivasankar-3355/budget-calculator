import React from 'react';
import { ExpenseItem } from './ExpenseItem';
import { MdDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ExpenseList = ({ expenses, setExpenses, editHandle }) => {
  const clearExpenses = () => {
    if (expenses.length > 0) {
      setExpenses([]);
      toast.info('Expenses cleared!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      console.log('kuch nhi hai bsdk');
    }
  };

  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              expenses={expenses}
              setExpenses={setExpenses}
              editHandle={editHandle}
            />
          );
        })}
      </ul>
      {expenses && (
        <button className="btn" onClick={clearExpenses}>
          clear expenses <MdDelete className="btn-icon" />{' '}
        </button>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
