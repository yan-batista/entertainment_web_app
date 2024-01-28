import MediaEntity from "../entities/mediaEntity";

export interface InsertResponse {
  status: number;
  statusText: string;
}

interface IBookmarkRepository {
  addBookmark(user_id: number, media_id: number): Promise<InsertResponse>;
  removeBookmark(user_id: number, media_id: number): Promise<void>;
  getAllMedia(user_id: number): Promise<MediaEntity[]>;
}

export default IBookmarkRepository;
