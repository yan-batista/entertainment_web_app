import IMediaRepository from "../database/repositories/IMediaRepository";

class MediaService {
  constructor(private mediaRepository: IMediaRepository) {}

  async getAllMedia() {
    try {
      return await this.mediaRepository.getAllMedia();
    } catch (error) {
      console.log(`Error fetching all media: ${error}`);
    }
  }

  async getAllMovies() {
    try {
      return await this.mediaRepository.getAllMovies();
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
    }
  }

  async getAllSeries() {
    try {
      return await this.mediaRepository.getAllSeries();
    } catch (error) {
      console.log(`Error fetching series: ${error}`);
    }
  }

  async getMediaByName(name: string, type?: string) {
    try {
      return await this.mediaRepository.getMediaByName(name, type);
    } catch (error) {
      console.log(`Error fetching media by name: ${error}`);
    }
  }
}

export default MediaService;
