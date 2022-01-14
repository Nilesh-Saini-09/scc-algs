import express from 'express';
const router = express.Router();
import { getAllAlgs,getAlgsByPuzzle, getAlgByAlgSet, getAlgById } from '../controllers/algs.js';

router
    .get('/', getAllAlgs)
    .get('/:puzzle', getAlgsByPuzzle)
    .get('/:puzzle/:algSet', getAlgByAlgSet)
    .get('/:puzzle/:algSet/:num', getAlgById)

export default router;