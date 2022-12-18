import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { fetcher } from "../../utilities/fetcher.js";
import styles from "./Detail.module.css";

export const Detail = () => {
  const { id } = useParams();

  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}tx/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (data) {
    console.log("🚀 ~ file: Detail.js:17 ~ Detail ~ data", data);

    return (
      <div className={styles.container}>
        <div className={styles.display}>
          <label className={styles.title}>Montant :</label>
          <div className={styles.data}>{data[0].amount}</div>
        </div>
        <div className={styles.spacerCt}>
          <div className={styles.spacer}></div>
        </div>

        <div className={styles.display}>
          <label className={styles.title}>Date :</label>
          <div className={styles.data}>{data[0].date}</div>
        </div>
        <div className={styles.spacerCt}>
          <div className={styles.spacer}></div>
        </div>
        <div className={styles.display}>
          <label className={styles.title}>Méthode :</label>
          <div className={styles.data}>{data[0].payment_type}</div>
        </div>
        <div className={styles.spacerCt}>
          <div className={styles.spacer}></div>
        </div>
        <div className={styles.display}>
          <label className={styles.title}>Type :</label>
          <div className={styles.data}>
            {data[0].is_earning ? "Gain" : "Achat"}
          </div>
        </div>
        <div className={styles.spacerCt}>
          <div className={styles.spacer}></div>
        </div>
        <div className={styles.display}>
          <label className={styles.title}>Description :</label>
          <div className={styles.data}>{data[0].description}</div>
        </div>
        <div></div>
      </div>
    );
  }
};
