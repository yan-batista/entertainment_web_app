import api from "../lib/axios";

export async function getAllBookmarkedMedia() {
  try {
    const resp = await api.get("/bookmarked", { withCredentials: true });
    return resp.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function addBookmark(media_id: number) {
  try {
    const data = { media_id };
    await api.post("/bookmark/add", data, { withCredentials: true });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function removeBookmark(media_id: number) {
  try {
    const data = { media_id };
    await api.delete("/bookmark/remove", { withCredentials: true, data });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
