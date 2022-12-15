import React from "react";
import styles from "./Transaction.module.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export const Transaction = ({ transaction }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.TransactionListContainer}
      onClick={() => {
        console.log(transaction.id);
        navigate(`/tx/${transaction.id}`);
      }}
    >
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
