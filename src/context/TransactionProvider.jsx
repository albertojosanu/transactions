import { createContext, useState, useContext, useCallback } from "react";
import { AuthContext } from "./AuthProvider.jsx";
import {
  getTransactions,
  getFilterTransactions,
  postPeriodTransactions,
  postTransaction,
  editTransaction,
  deleteTransaction,
} from "../services/transactionApi.js";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [periodTransactions, setPeriodTransactions] = useState([]);
  const [error, setError] = useState("");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

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

  const filterTransactions = async (sortBy, filterBy) => {
    try {
      const newTransactions = await getFilterTransactions({
        token: user?.token,
        sortBy,
        filterBy,
      });
      setTransactions(newTransactions);
    } catch (err) {
      setError(err.message);
    }
  };

  const showTransactions = async (start, end) => {
    try {
      setLoading(true);
      const newTransactions = await postPeriodTransactions({
        token: user?.token,
        start,
        end,
      });
      setPeriodTransactions(newTransactions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

  const range = (start, end, reverse = false) => 
    !reverse
      ? Array.from({ length: end - start + 1 }, (_, i) => start + i)
      : Array.from({ length: start - end + 1 }, (_, i) => start - i);

  const format = (number) => 
    range(Math.floor((String(number).length + 2) / 3), 1, true).map((i) =>
      i === 1
        ? String(number).slice(-3) + " ₽"
        : String(number).slice(-3 * i, -3 * (i - 1)) + " ",
    );

  return (
    <TransactionContext.Provider
      value={{
        loading,
        transactions,
        setTransactions,
        periodTransactions,
        setPeriodTransactions,
        error,
        setError,
        updateTransactions,
        filterTransactions,
        showTransactions,
        addNewTransaction,
        updateTransaction,
        removeTransaction,
        start,
        setStart,
        end,
        setEnd,
        range,
        format,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
