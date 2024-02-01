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

export async function logoutService() {
  try {
    await api.get("/logout", { withCredentials: true });
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function signupService(user_email: string, user_password: string, user_confirm_password: string) {
  try {
    await api.post("/signup", {
      email: user_email,
      password: user_password,
      confirm_password: user_confirm_password,
    });
  } catch (error: any) {
    if (error.response) throw new Error(error.response.data.error);
  }
}
