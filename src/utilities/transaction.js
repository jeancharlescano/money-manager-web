import axios from "axios";

export const createTx = async (transaction) => {
  try {
    await axios.post(`http://localhost:5000/tx/`, transaction);
  } catch (error) {
    console.log("🚀 ~ file: transaction.js:9 ~ createTx ~ error", error);
  }
};

export const getAllTx = async () => {
  try {
    const result = await axios.get(`http://localhost:5000/tx/`);
    return result.data;
  } catch (error) {
    console.log("🚀 ~ file: transaction.js:8 ~ getAllTx ~ error", error);
  }
};
