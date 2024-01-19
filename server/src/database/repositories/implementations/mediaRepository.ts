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

  async getMediaByName(name: string, type?: string): Promise<MediaEntity[] | null> {
    let data, error;

    if (type !== undefined) {
      ({ data, error } = await this.client.from("Media").select().ilike("title", `%${name}%`).eq("category", type));
    } else {
      ({ data, error } = await this.client.from("Media").select().ilike("title", `%${name}%`));
    }

    if (error) throw new Error(error.message);

    return data;
  }

  async getAllMovies(): Promise<MediaEntity[]> {
    const { data, error } = await this.client.from("Media").select().eq("category", "movie");
    if (error) throw new Error(error.message);
    return data;
  }

  async getAllSeries(): Promise<MediaEntity[]> {
    const { data, error } = await this.client.from("Media").select().eq("category", "tv-series");
    if (error) throw new Error(error.message);
    return data;
  }
}

export default MediaRepository;
