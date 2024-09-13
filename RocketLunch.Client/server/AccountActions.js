import axios from "axios";
import { ROOT, ACCOUNT } from "./api";

export async function register(email, phoneNumber, password) {
  await axios
    .post(`${ROOT + ACCOUNT}register`, {
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function login(email, password) {
  const data = await axios.post(
    `${ROOT + ACCOUNT}login`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data);
  return data;
}

export async function getUsers() {
  const data = await axios.post(
    `${ROOT + ACCOUNT}login`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data);
  return data;
}

export async function addUser(email, password) {
  const data = await axios.post(
    `${ROOT + ACCOUNT}login`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data);
  return data;
}
