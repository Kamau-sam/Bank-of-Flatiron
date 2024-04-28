import React, { useState } from "react";
import TransactionsTable from "./TransactionsTable"; // Importing TransactionsTable component
import TransactionForm from "./TransactionForm"; // Importing TransactionForm component
import "./AppStyles.css"; // Importing CSS styles

// Main App component
function App() {
  const [transactions, setTransactions] = useState([]); // State for transactions
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
