import { SupabaseClient } from "@supabase/supabase-js";
import getSupabaseConnection from "../../config";
import IBookmarkRepository, { InsertResponse } from "../IBookmarkRepository";

// supabase
class BookMarkRepository implements IBookmarkRepository {
  private client: SupabaseClient;

  constructor() {
    this.client = getSupabaseConnection();
  }

  async addBookmark(user_id: number, media_id: number): Promise<InsertResponse> {
    const { status, statusText, error } = await this.client.from("UserBookmarked").insert([{ user_id, media_id }]);
    if (error) throw new Error(error.message);
    return { status, statusText };
  }

  removeBookmark(user_id: number, media_id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default BookMarkRepository;
