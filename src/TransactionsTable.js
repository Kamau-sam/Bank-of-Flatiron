// src/TransactionsTable.js
import React from "react";
import Transaction from "./Transaction";

function TransactionsTable({ transactions }) {
  return (
    <table>
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
