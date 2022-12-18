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
        navigate(`/tx/${transaction.id}`);
      }}
    >
      <div className={styles.DateTxt}>
        {dayjs(transaction.date).format("DD/MM/YYYY HH:mm:ss")}
      </div>
      <div className={styles.TransacDesc}>
        {transaction.is_earning === true ? (
          <div className={styles.Amount}>
            <div className={styles.PriceTxtGreen}>{transaction.amount} €</div>
          </div>
        ) : (
          <div className={styles.Amount}>
            <div className={styles.PriceTxtRed}>{transaction.amount} €</div>
          </div>
        )}
        <div className={styles.Description}>
          <div className={styles.TransacTxt}>{transaction.description}</div>
        </div>
      </div>
      <div className={styles.TransacType}>{transaction.payment_type}</div>
    </div>
  );
};
