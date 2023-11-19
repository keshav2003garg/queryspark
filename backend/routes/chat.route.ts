import express from 'express';
const router = express.Router();

import { addData } from '../controllers/addData.controller';
import { chat } from '../controllers/chat.controller';

router.post('/add-data', addData);
router.post('/chat', chat);

export default router;
