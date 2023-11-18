import express from 'express';
const router = express.Router();

router.post('/add-data', (req, res) => {
    res.json({ message: 'POST request to /api/add-data' });
});

export default router;
