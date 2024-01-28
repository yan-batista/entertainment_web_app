import api from "../lib/axios";

export async function getAllBookmarkedMedia() {
  try {
    const resp = await api.get("/bookmarked", { withCredentials: true });
    return resp.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
