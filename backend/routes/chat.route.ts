import express from 'express';
const router = express.Router();

import { addData } from '../controllers/addData.controller';
import { chat } from '../controllers/chat.controller';
import { deleteAllVectors } from '../controllers/deleteVector.controller';

router.post('/add-data', addData);
router.post('/chat', chat);
router.delete('/delete-all-vectors', deleteAllVectors);

export default router;
