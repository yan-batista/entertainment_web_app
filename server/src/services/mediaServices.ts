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
}

export default MediaService;
