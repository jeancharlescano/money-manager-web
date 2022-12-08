import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Transaction } from "../../components/Transaction";
import { getAllTx } from "../../utilities/transaction";
import styles from "./Home.module.css";

export const Home = () => {
  const [operations, setOperations] = useState([]);
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
        <div className={styles.Balance}>{balance} €</div>
      </div>
      <div className={styles.BtnContainer}>
        <div className={styles.TxtTransaction} onClick={() => navigate("/tx")}>
          Transaction
        </div>
      </div>
      <div className={styles.List}>
        {operations.map((operation, key) => (
          <Transaction transaction={operation} key={key} />
        ))}
      </div>
    </div>
  );
};
