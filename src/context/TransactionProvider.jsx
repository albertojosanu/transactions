import { createContext, useState, useContext, useCallback } from "react";
import { AuthContext } from "./AuthProvider.jsx";
import {
  getTransactions,
  postTransaction,
  editTransaction,
  deleteTransaction,
} from "../services/transactionApi.js";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [date, setDate] = useState(null);

  const { user } = useContext(AuthContext);

  const updateTransactions = useCallback(async () => {
    try {
      setLoading(true);
      const newTransactions = await getTransactions({
        token: user?.token,
      });
      setTransactions(newTransactions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const showTransactions = async () => {
    try {
      setLoading(true);
      const newTransactions = await postPeriodTransactions({
        token: user?.token,
        period,
      });
      setTransactions(newTransactions);
    } catch (err) {
      setError(err.message);
      } finally {
      setLoading(false);
    }
    }


  const addNewTransaction = async (transaction) => {
    try {
      const newTransactions = await postTransaction({
        token: user?.token,
        transaction,
      });
      setTransactions(newTransactions);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateTransaction = async (transaction, id) => {
    try {
      const newTransactions = await editTransaction({
        token: user?.token,
        id,
        transaction,
      });
      setTransactions(newTransactions);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeTransaction = async (id) => {
    try {
      const newTransactions = await deleteTransaction({
        token: user?.token,
        id,
      });
      setTransactions(newTransactions);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        loading,
        transactions,
        setTransactions,
        error,
        setError,
        updateTransactions,
        showTransactions,
        addNewTransaction,
        updateTransaction,
        removeTransaction,
        date,
        setDate,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
