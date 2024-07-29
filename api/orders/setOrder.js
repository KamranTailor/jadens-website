import express from 'express';
const router = express.Router();
import { promises as fsPromises } from 'fs';
import { v4 as uuidv4 } from 'uuid';

router.post('/', async (request, response) => {
    try {
        // Read the existing data from orders.json
        const data = await fsPromises.readFile("data/orders.json", 'utf8');
        const dataJSON = JSON.parse(data);

        // Add a new UUID to the request body
        request.body.id = uuidv4();

        // Append the new data to the existing data
        dataJSON.push(request.body);

        // Write the updated data back to orders.json
        await fsPromises.writeFile("data/orders.json", JSON.stringify(dataJSON, null, 2));

        // Send a success response
        response.json({ status: true });
    } catch (error) {
        // Log and send an error response
        console.error("Error saving data:", error);
        response.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

export default router;