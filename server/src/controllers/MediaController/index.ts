import MediaRepository from "../../database/repositories/implementations/mediaRepository";
import MediaService from "../../services/mediaServices";
import MediaController from "./mediaController";

const mediaRepository: MediaRepository = new MediaRepository();
const mediaService: MediaService = new MediaService(mediaRepository);
const mediaController: MediaController = new MediaController(mediaService);

export default mediaController;
