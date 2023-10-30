import React from 'react';
// import './App.css';

function TransactionList({ filteredTransactions, onDeleteTransaction }) {
  const handleDeleteTransaction = (id) => {
    onDeleteTransaction(id);
  };

  const sortedTransactions = filteredTransactions.sort((a,b) => a.description.localeCompare(b.description))

  return (
    <div className="App">
      <h1 id ="list" >Transacted lists</h1>
      <table className='table'>
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid black' }}>Description</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Category</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Amount</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Date</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>
                <button onClick={() => handleDeleteTransaction(transaction.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;