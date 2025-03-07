import { Router } from 'express';
import heroes from '../controller/heroes';

const router = Router();

router.get('/heroes', heroes.getAllHeroes);
router.get('/heroes/:id', heroes.getHeroById)

export default router;
