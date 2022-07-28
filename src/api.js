import fetch from "cross-fetch";
import { host, token } from "./env";
import { toast } from "react-toastify";

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
    } else {
      const jsonResponse = await response.json();
      const error = jsonResponse.message;
      toast.error(error);
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
    } else {
      const jsonResponse = await response.json();
      const error = jsonResponse.message;
      toast.error(error);
    }
  } catch (error) {
    console.log(error);
  }
};
