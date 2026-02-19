import axios from "axios";

const API_USER_URL = "https://wedev-api.sky.pro/api/user/";

export async function getUsers() {
  try {
    const data = await axios.get(API_USER_URL);
    return data.data.users;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signUp(user) {
  try {
    const data = await axios.post(API_USER_URL, user, {
      headers: {
        "Content-Type": "text/html",
      },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signIn(user) {
  try {
    const data = await axios.post(API_USER_URL + "login", user, {
      headers: {
        "Content-Type": "text/html",
      },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}
