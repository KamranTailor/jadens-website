import express from 'express';
const router = express.Router();
import { promises as fsPromises } from 'fs';


async function saveData( newObject) {
    try {
        const data = await fsPromises.readFile("data/items.json", 'utf8');
        const dataJSON = JSON.parse(data);
        
        dataJSON.push(newObject)
        await fsPromises.writeFile("data/items.json", JSON.stringify(dataJSON, null, 2));
        
        return true
    } catch (error) {
        console.error("Error saving data:", error);
        return false;
    }
}

router.post('/', async (request, response) => {
    const order = {
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        catagory: request.body.catagory,
    }

    const status = saveData(order)

    response.json({dataJSON});
});




export default router;