import express from 'express';
import { getTrendingMovie, getMovieTrailers, getMovieDetails, getSameMovies, getMovieByCategory} from '../controllers/movieController.js';

const router = express.Router();

router.get('/trending', getTrendingMovie)
router.get('/:id/trailers', getMovieTrailers)
router.get('/:id/details', getMovieDetails)
router.get('/:id/same', getSameMovies)
router.get('/:category', getMovieByCategory)

export default router;