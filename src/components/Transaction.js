import React from "react";
import styles from "./Transaction.module.css";
import dayjs from "dayjs";

export const Transaction = ({ transaction }) => {
  return (
    <div className={styles.TransactionListContainer}>
      <div className={styles.DateTxt}>
        {dayjs(transaction.date).format("DD/MM/YYYY HH:mm:ss")}
      </div>
      <div className={styles.TransacDesc}>
        {transaction.is_earning === true ? (
          <>
            <div className={styles.PriceTxtGreen}>{transaction.amount} €</div>
          </>
        ) : (
          <>
            <div className={styles.PriceTxtRed}>{transaction.amount} €</div>
          </>
        )}
        <div className={styles.TransacTxt}>{transaction.description}</div>
      </div>
      <div className={styles.TransacType}>{transaction.payment_type}</div>
    </div>
  );
};
