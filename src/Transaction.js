import React from "react";
// Component to display transaction details in a table row
function Transaction({ transaction }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.category}</td>
    </tr>
  );
}

export default Transaction;
