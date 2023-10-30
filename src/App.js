import React, { useEffect, useState } from 'react';
import TransactionList from './TransactionList';
import NewForm from './NewForm';
import SearchByDescription from './SearchByDescription';
import './App.css';

function App() {
  // State to hold all transactions from the API
  const [displayAllTransaction, setDisplayTransaction] = useState([]);
  
  // State to hold the search input value
  const [searchItem, setSearchItem] = useState("");

  // Fetch transactions from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((resp) => resp.json())
      .then((data) => {
        // Update the state with the fetched data
        setDisplayTransaction(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to add a new transaction to the display
  const handleNewTransaction = (newTransaction) => {
    setDisplayTransaction((lastTransaction) => [...lastTransaction, newTransaction]);
  }

  // Function to delete a transaction from the display
  const handleDeleteTransaction = (id) => {
    setDisplayTransaction((previousTransaction) => previousTransaction.filter(transaction => transaction.id !== id))
  }

  // Filter transactions based on the search input value
  const filteredTransaction = displayAllTransaction.filter(transaction => {
    return transaction.description.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div id="app">
      {/* Search input for filtering transactions by description */}
      <SearchByDescription searchNewItem={searchItem} onsearchNewItem={setSearchItem} />
      
      {/* Component to display the list of transactions */}
      <TransactionList filteredTransactions={filteredTransaction} onDeleteTransaction={handleDeleteTransaction} />
      
      {/* Form for adding new transactions */}
      <NewForm addNewTransaction={handleNewTransaction} />
    </div>
  );
}

export default App;