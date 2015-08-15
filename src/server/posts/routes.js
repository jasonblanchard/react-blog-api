import express from 'express';
import postController from './post_controller';

let router = express.Router();

router.get('/', postController.index);

export default router;
