import React, { useState } from "react";
import TransactionsTable from "./TransactionsTable";
import TransactionForm from "./TransactionForm";
import "./Style.css";

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
    <div>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
