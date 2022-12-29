import axios from "axios";

export const createTx = async (transaction) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/tx/`, transaction);
  } catch (error) {
    console.log("🚀 ~ file: transaction.js:9 ~ createTx ~ error", error);
  }
};

export const getAllTx = async () => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/tx/`);
    return result.data;
  } catch (error) {
    console.log("🚀 ~ file: transaction.js:8 ~ getAllTx ~ error", error);
  }
};
