import fsPromises from 'fsPromises.js';

async function saveData(path, newObject) {
    try {
        const data = await fsPromises.readFile(path, 'utf8');
        const dataJSON = JSON.parse(data);
        
        dataJSON.push(newObject)
        await fsPromises.writeFile(path, JSON.stringify(dataJSON, null, 2));
        
        return true
    } catch (error) {
        console.error("Error saving data:", error);
        return false;
    }
}

export { saveData };
