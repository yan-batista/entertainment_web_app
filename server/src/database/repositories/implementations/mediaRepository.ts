import IMediaRepository from "../IMediaRepository";

import { SupabaseClient } from "@supabase/supabase-js";
import getSupabaseConnection from "../../config";
import MediaEntity from "../../entities/mediaEntity";

class MediaRepository implements IMediaRepository {
  private client: SupabaseClient;

  constructor() {
    this.client = getSupabaseConnection();
  }

  async getAllMedia(): Promise<MediaEntity[]> {
    const { data, error } = await this.client.from("Media").select();
    if (error) throw new Error(error.message);
    return data;
  }

  getMediaByName(name: string, type?: string): Promise<MediaEntity> {
    throw new Error("Method not implemented.");
  }

  getAllMovies(): Promise<MediaEntity[]> {
    throw new Error("Method not implemented.");
  }
  getAllSeries(): Promise<MediaEntity[]> {
    throw new Error("Method not implemented.");
  }
}

export default MediaRepository;
