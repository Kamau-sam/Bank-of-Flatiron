import React from "react";
import Transaction from "./Transaction";
import "./AppStyles.css"; // Assuming you might want specific styles

function TransactionsTable({ transactions }) {
  return (
    <table className="transactions-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;
