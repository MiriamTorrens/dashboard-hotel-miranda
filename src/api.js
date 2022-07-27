import fetch from "cross-fetch";
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
