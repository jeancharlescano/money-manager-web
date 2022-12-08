import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTx } from "../../utilities/transaction";
import styles from "./AddTransaction.module.css";
import dayjs from "dayjs";

export const AddTransaction = ({ navigation }) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [txType, setTxType] = useState(false);
  const navigate = useNavigate();

  const insertTx = async () => {
    const date = dayjs().format("DD/MM/YYYY");
    const transaction = {
      amount: amount,
      isEarning: txType,
      paymentType: type.toLowerCase(),
      description: description,
      date: date,
    };
    try {
      await createTx(transaction);
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ file: AddTransaction.js:36 ~ insertTx ~ error", error);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.FormContainer}>
        <div className={styles.Form}>
          <div className={styles.FormTxt}>Montant :</div>
          <input
            type="number"
            className={styles.FormInput}
            placeholder="Saisir le montant"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className={styles.Form}>
          <div className={styles.FormTxt}>Type :</div>
          <input
            type="text"
            className={styles.FormInput}
            placeholder="Saisir type de paiement"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>
        <div className={styles.Form}>
          <div className={styles.FormTxt}>Description :</div>
          <textarea
            type="text"
            className={styles.FormInputDes}
            placeholder="Saisir la description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className={styles.TxTypeRadio}>
          <div onClick={() => setTxType(false)}>
            <label className={styles.FormTxt}>Achat</label>
            <input type="radio" value="0" id="Achat" name="txType" />
          </div>
          <div onClick={() => setTxType(true)}>
            <label className={styles.FormTxt}>Gain</label>
            <input type="radio" value="1" id="Gain" name="txType" />
          </div>
        </div>
      </div>
      <div className={styles.Bottom}>
        <div className={styles.BtnContainer} onClick={insertTx}>
          <div className={styles.BtnText}>Terminer</div>
        </div>
      </div>
    </div>
  );
};
