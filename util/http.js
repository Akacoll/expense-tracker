import axios from "axios";
import { BASE_URL } from "../constants/consts";

export const storeExpense = (expenseData) => {
  axios.post(BASE_URL + "expenses.json", expenseData);
};
