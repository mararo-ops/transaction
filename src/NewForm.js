import React, { useState } from "react";

function NewForm({ addNewTransaction }) {
  const [updatedTransaction, setUpdatedTransaction] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUpdatedTransaction((lastTransaction) => ({
      ...lastTransaction,
      [name]: value,
     
    }));
  }
  console.log(updatedTransaction)

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTransaction(updatedTransaction);
    setUpdatedTransaction({
      description: "",
      amount: "",
      category: "",
      date: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Transaction</h2>
      <form>
        <label className="form-label">Description:</label>
        <input
          className="form-input"
          type="text"
          name="description"
          value={updatedTransaction.description}
          onChange={handleInputChange}
        />

        <label className="form-label">Category:</label>
        <input
          className="form-input"
          type="text"
          name="category"
          value={updatedTransaction.category}
          onChange={handleInputChange}
        />

        <label className="form-label">Amount:</label>
        <input
          className="form-input"
          type="number"
          name="amount"
          value={updatedTransaction.amount}
          onChange={handleInputChange}
        />

        <label className="form-label">Date:</label>
        <input
          className="form-input"
          type="date"
          name="date"
          value={updatedTransaction.date}
          onChange={handleInputChange}
        />

        <button className="form-button" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default NewForm;