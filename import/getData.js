import fsPromises from 'fsPromises.js';

async function loadData(path) {
    try {
        const data = await fsPromises.readFile(path, 'utf8');
        const dataJSON = JSON.parse(data);
        return dataJSON;
    } catch (error) {
        console.error("Error loading data:", error);
        return false;
    }
}

export { loadData };