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

// Get all movies function
export async function getAllMovies() {
  try {
    const resp = await api.get("/movies");
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}

// Get all series function
export async function getAllSeries() {
  try {
    const resp = await api.get("/series");
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}
