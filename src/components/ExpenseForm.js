import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ExpenseForm = ({
  setExpenses,
  enteredValues,
  setEnteredValues,
}) => {
  const getValues = (e) => {
    setEnteredValues((p) => {
      return {
        ...p,
        id: uuidv4(),
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitValues = (e) => {
    e.preventDefault();
    if (enteredValues.charge === '' || enteredValues.amount === '') {
      console.log('no values entered');
      toast.error('Fields cannot be empty!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    if (enteredValues.amount <= 0) {
      console.log('amount cannot be less than zero or zero');
      toast.error('Amount cannot be less than zero or zero!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    setExpenses((p) => {
      return [...p, enteredValues];
    });
    setEnteredValues({ id: '', charge: '', amount: '' });
    toast.success('submitted successfully!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g rent"
            value={enteredValues.charge}
            onChange={getValues}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g 2000"
            value={enteredValues.amount}
            onChange={getValues}
          />
        </div>
      </div>
      <button type="submit" onClick={submitValues} className="btn">
        submit
        <MdSend className="btn-icon" />
      </button>
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
    </form>
  );
};
