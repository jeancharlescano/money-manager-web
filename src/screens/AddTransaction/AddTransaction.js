import React, { useState } from "react";
import { createTx } from "../../utilities/transaction";
import styles from "./AddTransaction.module.css";
import dayjs from "dayjs";

export const AddTransaction = ({ navigation }) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [txType, setTxType] = useState(false);

  const insertTx = async () => {
    const date = dayjs().format("DD/MM/YYYY");
    let transaction = {
      amount: amount,
      isEarning: txType,
      paymentType: type.toLowerCase(),
      description: description,
      date: date,
    };
    try {
      await createTx(transaction);
      navigation.navigate("Home");
    } catch (error) {
      console.log("🚀 ~ file: AddTransaction.js:36 ~ insertTx ~ error", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.montantForm}>
          <div className={styles.formTxt}>Montant :</div>
          <input
            type="number"
            className={styles.formInput}
            placeholder="Saisir le montant"
            onChangediv={(value) => {
              setAmount(value);
              console.log(
                "🚀 ~ file: AddTransaction.js:43 ~ AddTransaction ~ amount",
                amount
              );
            }}
            keyboardType="numeric"
          />
        </div>
        <div className={styles.montantForm}>
          <div className={styles.formTxt}>Type :</div>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Saisir type de paiement"
            onChangediv={(value) => {
              setType(value);
              console.log(
                "🚀 ~ file: AddTransaction.js:55 ~ AddTransaction ~ type",
                type
              );
            }}
          />
        </div>
        <div className={styles.montantForm}>
          <div className={styles.formTxt}>Description :</div>
          <input
            type="text"
            className={styles.formInputDes}
            placeholder="Saisir la description"
            multiline
            blurOnSubmit
            onChangediv={(value) => {
              setDescription(value);
              console.log(
                "🚀 ~ file: AddTransaction.js:66 ~ AddTransaction ~ Description",
                description
              );
            }}
          />
        </div>
        <div className={styles.txTypeForm}>
          <div className={styles.txTypeBtn} onClick={() => setTxType(false)}>
            <label className={styles.txTypediv} for="Achat">
              Achat
            </label>
            <input
              type="radio"
              value="0"
              status={txType === false ? "checked" : "unchecked"}
              id="Achat"
            />
          </div>
          <div className={styles.txTypeBtn} onClick={() => setTxType(true)}>
            <label className={styles.txTypediv} for="Gain">
              Gain
            </label>
            <input
              type="radio"
              value="1"
              status={txType === true ? "checked" : "unchecked"}
              id="Gain"
            />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.btnField} onClick={insertTx}>
          <div className={styles.btndiv}>Terminer</div>
        </div>
      </div>
    </div>
  );
};
