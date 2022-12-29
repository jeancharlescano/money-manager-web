import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createTx } from "../../utilities/transaction";
import styles from "./AddTransaction.module.css";

export const AddTransaction = ({ navigation }) => {
  const amountRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();

  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    // const date = new Date();
    // console.log("🚀 ~ file: AddTransaction.js:16 ~ insertTx ~ date", date);
    // const transaction = {
    //   amount: amount,
    //   isEarning: txType,
    //   paymentType: type.toLowerCase(),
    //   description: description,
    //   date: date,
    // };
    // try {
    //   await createTx(transaction);
    //   navigate("/");
    // } catch (error) {
    //   console.log("🚀 ~ file: AddTransaction.js:27 ~ insertTx ~ error", error);
    // }
  };

  return (
    <form className={styles.Container} onSubmit={onSubmit}>
      <div className={styles.FormContainer}>
        <div className={styles.Form}>
          <label className={styles.FormTxt}>Montant :</label>
          <input
            type="number"
            className={styles.FormInput}
            placeholder="Saisir le montant"
            ref={amountRef}
          />
        </div>
        <div className={styles.Form}>
          <label className={styles.FormTxt}>Type :</label>
          <select name="txType" className={styles.FormInput} ref={typeRef}>
            <option value="carte">Carte</option>
            <option value="virement">Virement</option>
            <option value="espece">Espèce</option>
            <option value="cheque">Chèque</option>
          </select>
        </div>
        <div className={styles.Form}>
          <label className={styles.FormTxt}>Description :</label>
          <textarea
            type="text"
            className={styles.FormInputDes}
            placeholder="Saisir la description"
            ref={descriptionRef}
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
        <button type="submit" className={styles.BtnContainer}>
          {/* <div className={styles.BtnText}>Terminer</div> */}
          Terminer
        </button>
      </div>
    </form>
  );
};
