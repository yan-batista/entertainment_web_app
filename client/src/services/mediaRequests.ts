import api from "../lib/axios";

// Get all media function
export async function getAllMediaApi() {
  try {
    const resp = await api.get("/");
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}
