import express from 'express';
const router = express.Router();
import { promises as fsPromises } from 'fs';

router.get('/', async (request, response) => {
    const data = await fsPromises.readFile("data/orders.json", 'utf8');
    const dataJSON = JSON.parse(data);
    response.json({dataJSON});
});

export default router;