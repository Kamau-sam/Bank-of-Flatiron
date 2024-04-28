import React, { useState } from "react";
import TransactionsTable from "./TransactionsTable";
import TransactionForm from "./TransactionForm";
import "./AppStyles.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-wrapper">
      {" "}
      {/* Wrap everything in a parent container */}
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
