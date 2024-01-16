import MediaRepository from "../../database/repositories/implementations/MediaRepository";
import MediaService from "../../services/MediaServices";
import MediaController from "./mediaController";

const mediaRepository: MediaRepository = new MediaRepository();
const mediaService: MediaService = new MediaService(mediaRepository);
const mediaController: MediaController = new MediaController(mediaService);

export default mediaController;
