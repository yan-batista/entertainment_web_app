import MediaEntity from "../entities/mediaEntity";

interface IMediaRepository {
  getAllMedia(): Promise<MediaEntity[]>;
  getMediaByName(name: string, type?: string): Promise<MediaEntity>;
  getAllMovies(): Promise<MediaEntity[]>;
  getAllSeries(): Promise<MediaEntity[]>;
}

export default IMediaRepository;
