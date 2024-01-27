import { jwtDecode } from "jwt-decode";
import api from "../lib/axios";

export async function loginService(user_email: string, user_password: string, setCookie: any) {
  try {
    const resp = await api.post("/login", {
      email: user_email,
      password: user_password,
    });

    const decoded = jwtDecode(resp.data);
    if (decoded && decoded.exp) {
      setCookie("jwt", resp.data, { path: "/", expires: new Date(decoded.exp * 1000) });
    }
  } catch (error) {
    console.log(error);
  }
}
