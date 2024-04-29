import React, { useState } from "react";
import TransactionsTable from "./Components/TransactionsTable"; // Importing TransactionsTable component
import TransactionForm from "./Components/TransactionForm"; // Importing TransactionForm component
import "./Components/AppStyles.css"; // Importing CSS styles

// Main App component
function App() {
  // State that has an array of transactions
  const [transactions, setTransactions] = useState([
    {
      date: "2024-04-23",
      description: "Groceries",
      category: "Food",
      amount: "693",
    },
    {
      date: "2024-04-25",
      description: "Movies",
      category: "Entertainment",
      amount: "210",
    },
    {
      date: "2024-04-26",
      description: "Fashion",
      category: "T-shirts,Jeans and bag",
      amount: "2350",
    },

    {
      date: "2024-04-26",
      description: "Gaming",
      category: "Entatainment",
      amount: "693",
    },
    {
      date: "2024-04-25",
      description: "Ugali & Choma",
      category: "Food",
      amount: "440",
    },
    {
      date: "2024-04-28",
      description: "Fashion",
      category: "Hair cut and beard trim",
      amount: "500",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Handler for adding a new transaction
  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Filtering transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-wrapper">
      <h1>The Royal Bank of Flatiron</h1>
      <div className="app-container">
        <input
          type="text"
          placeholder="Search transactions"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <TransactionsTable transactions={filteredTransactions} />
      </div>
    </div>
  );
}

export default App;
