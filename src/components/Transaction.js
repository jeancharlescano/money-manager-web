import React from "react";
import styles from "./Transaction.module.css";

export const Transaction = ({ transaction }) => {
  return (
    <div className={styles.TransactionListContainer}>
      <div className={styles.DateTxt}>{transaction.date}</div>
      <div className={styles.TransacDesc}>
        {transaction.is_earning === true ? (
          <>
            <div className={styles.PriceTxtGreen}>
              {transaction.amount} €
            </div>
          </>
        ) : (
          <>
            <div className={styles.PriceTxtRed}>
              {transaction.amount} €
            </div>
          </>
        )}
        <div className={styles.TransacTxt}>{transaction.description}</div>
      </div>
      <div className={styles.TransacType}>{transaction.payment_type}</div>
    </div>
  );
};
