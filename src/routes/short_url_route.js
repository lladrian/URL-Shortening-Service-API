import { Router } from "express";
import * as ShortURLController from '../controllers/short_url_controller.js'; // Import the controller

const shortURLRoutes = Router();


shortURLRoutes.post('/', ShortURLController.create_short_url);
shortURLRoutes.put('/:short_code', ShortURLController.update_short_url);
shortURLRoutes.get('/:short_code', ShortURLController.get_specific_short_url);
shortURLRoutes.get('/:short_code/stats', ShortURLController.get_specific_stats_short_url);
shortURLRoutes.delete('/:short_code', ShortURLController.delete_short_url);


export default shortURLRoutes;
