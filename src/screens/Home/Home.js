import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Transaction } from "../../components/Transaction";
import { getAllTx } from "../../utilities/transaction";
import styles from "./Home.module.css";

export const Home = () => {
  const [operations, setOperations] = useState([]);
  console.log("🚀 ~ file: Home.js:9 ~ Home ~ operations", operations);
  const [balance, setBalance] = useState();
  const navigate = useNavigate();

  const getAllTransactions = async () => {
    const transactions = await getAllTx();
    let incrBalance = 0;
    for (const transaction of transactions) {
      transaction.is_earning === false
        ? (incrBalance -= transaction.amount)
        : (incrBalance += transaction.amount);
    }
    setOperations(transactions);
    setBalance(incrBalance);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.BalanceContainer}>
        <div className={styles.Balance}>{Number(balance).toFixed(2)} €</div>
      </div>
      <div className={styles.BtnContainer}>
        <div className={styles.TxtTransaction} onClick={() => navigate("/tx")}>
          Transaction
        </div>
      </div>
      <div className={styles.List}>
        {operations.map((operation) => (
          <Transaction transaction={operation} />
        ))}
      </div>
    </div>
  );
};
