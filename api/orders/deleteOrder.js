import express from 'express';
const router = express.Router();
import { promises as fsPromises } from 'fs';

router.post('/', async (request, response) => {
    try {
        const data = await fsPromises.readFile("data/orders.json", 'utf8');
        const dataJSON = JSON.parse(data);
        

        dataJSON = dataJSON.filter(item => item.id !== request.body.id);
        response.json({status: true})

    } catch (error) {
        response.json({status: false})
        console.log(error)
    }

});

export default router;