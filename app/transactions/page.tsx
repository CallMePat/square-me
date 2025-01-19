"use client";

import { useState } from "react";
import { Calendar, Download, Circle } from "lucide-react";
import type { Transaction } from "@/types/transaction";
const mockTransactions: Transaction[] = [
  {
    id: "TR_8401857902",
    amount: 43644,
    type: "Transfer",
    date: "Feb 12, 2022",
    time: "10:30AM",
    status: "Processed",
  },
  {
    id: "TR_8401857903",
    amount: 35471,
    type: "Withdrawal",
    date: "Feb 12, 2022",
    time: "10:30AM",
    status: "Failed",
  },
  {
    id: "TR_8401857904",
    amount: 43644,
    type: "Deposit",
    date: "Feb 12, 2022",
    time: "10:30AM",
    status: "Processed",
  },
  {
    id: "TR_8401857905",
    amount: 35471,
    type: "Request",
    date: "Feb 12, 2022",
    time: "10:30AM",
    status: "Failed",
  },
];

export default function TransactionsPage() {
  const [selectedDate, setSelectedDate] = useState(
    "June 6, 2023 - Jun 15, 2023"
  );
  console.log(setSelectedDate);

  return (
    <div className="transactions-container">

      <div className="transactions-filters border">
        <select className="transactions-select" defaultValue="all">
          <option value="all">All Accounts</option>
          <option value="savings">Savings</option>
          <option value="checking">Checking</option>
        </select>

        <div style={{ display: "flex", gap: "16px" }}>
          <button className="transactions-date-range">
            <Calendar size={20} />
            <span>{selectedDate}</span>
          </button>

          <button className="transactions-export-button">
            <Download size={20} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <table className="transactions-data-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Amount</th>
            <th>Transaction ID</th>
            <th>Transaction Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>₦{transaction.amount.toLocaleString()}</td>
              <td>{transaction.id}</td>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
              <td>{transaction.time}</td>
              <td>
                <span
                  className={`transaction-status ${
                    transaction.status === "Processed"
                      ? "transaction-status-processed"
                      : "transaction-status-failed"
                  }`}
                >
                  <Circle size={8} fill="currentColor" />
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card View */}
      <div className="transactions-cards">
        {mockTransactions.map((transaction) => (
          <div key={transaction.id} className="transaction-card">
            <div className="transaction-card-row">
              <span>Amount:</span>
              <span>₦{transaction.amount.toLocaleString()}</span>
            </div>
            <div className="transaction-card-row">
              <span>Transaction Type:</span>
              <span>{transaction.type}</span>
            </div>
            <div className="transaction-card-row">
              <span>Date:</span>
              <span>
                {transaction.date}, {transaction.time}
              </span>
            </div>
            <div className="transaction-card-row">
              <span>Status:</span>
              <span
                className={`transaction-status ${
                  transaction.status === "Processed"
                    ? "transaction-status-processed"
                    : "transaction-status-failed"
                }`}
              >
                <Circle size={8} fill="currentColor" />
                {transaction.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="transactions-pagination">
        <button
          className="transactions-pagination-button"
          aria-label="Previous page"
        >
          {"<"}
        </button>
        <button className="transactions-pagination-button" aria-current="page">
          1
        </button>
        <button className="transactions-pagination-button">2</button>
        <button className="transactions-pagination-button">...</button>
        <button className="transactions-pagination-button">9</button>
        <button
          className="transactions-pagination-button"
          aria-label="Next page"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
