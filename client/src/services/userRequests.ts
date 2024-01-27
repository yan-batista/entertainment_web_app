import api from "../lib/axios";

export async function loginService(user_email: string, user_password: string /* , setCookie: any */) {
  try {
    await api.post(
      "/login",
      {
        email: user_email,
        password: user_password,
      },
      { withCredentials: true }
    );
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function checkAuth() {
  try {
    await api.get("/auth", { withCredentials: true });
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function logout() {
  try {
    await api.get("/logout", { withCredentials: true });
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
