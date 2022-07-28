import fetch from "cross-fetch";
import { json } from "d3";
import { host, token } from "./env";

export const fetchData = async (url, type) => {
  try {
    const response = await fetch(host + url, {
      method: type,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json charset=utf-8",
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginDB = async (user, password) => {
  try {
    const response = await fetch(
      host + `login?username=${user}&password=${password}`,
      {
        method: "POST",
      }
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.token;
    }
  } catch (error) {
    console.log(error);
  }
};
