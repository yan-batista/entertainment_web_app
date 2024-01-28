import { SupabaseClient } from "@supabase/supabase-js";
import getSupabaseConnection from "../../config";
import MediaEntity from "../../entities/mediaEntity";
import IBookmarkRepository, { InsertResponse } from "../IBookmarkRepository";

// supabase
class BookMarkRepository implements IBookmarkRepository {
  private client: SupabaseClient;

  constructor() {
    this.client = getSupabaseConnection();
  }
  async getAllMedia(user_id: number): Promise<MediaEntity[]> {
    // SELECT * FROM Media JOIN UserBookmarked ON Media.id = UserBookmarked.media_id where UserBookmarked.user_id = ${user_id}
    const { data, error } = await this.client.from("UserBookmarked").select("Media(*)").eq("user_id", user_id);
    if (error) throw new Error(error.message);

    const mediaEntities: MediaEntity[] = data.map((result) => {
      const unknownMedia = result.Media as unknown;
      const media = unknownMedia as MediaEntity;
      return {
        id: media.id,
        title: media.title,
        year: media.year,
        category: media.category,
        rating: media.rating,
        isTrending: media.isTrending,
        regularImageURL: media.regularImageURL,
        trendingImageURL: media.trendingImageURL,
      };
    });

    return mediaEntities;
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
