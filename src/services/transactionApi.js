import axios from "axios";

const API_TRANSACTION_URL = "https://wedev-api.sky.pro/api/transactions/";

export async function getTransactions({ token }) {
  try {
    const data = await axios.get(API_TRANSACTION_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.transactions;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getFilterTransactions({ token, sort, filter }) {
  try {
    const data = await axios.get(API_TRANSACTION_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        sort,
        filter,
      },
    });
    return data.data.transactions;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postPeriodTransactions({ token, period }) {
  try {
    const data = await axios.get(API_TRANSACTION_URL + "period", period, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.transactions;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postTransaction({ token, transaction }) {
  try {
    const data = await axios.post(API_TRANSACTION_URL, transaction, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.transactions;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editTransaction({ token, id, transaction }) {
  try {
    const data = await axios.put(API_TRANSACTION_URL + id, transaction, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.transactions;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteTransaction({ token, id }) {
  try {
    const data = await axios.delete(API_TRANSACTION_URL + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.transactions;
  } catch (error) {
    throw new Error(error.message);
  }
}
