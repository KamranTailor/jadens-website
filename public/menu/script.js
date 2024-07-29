
async function getData() {
    const data = await fetch("/getItemsRouter");
    const dataJson = await data.json();
    console.log(dataJson);
    
    const colors = [
        "#3498db",  "#e74c3c",   "#2ecc71", "#f39c12",   "#9b59b6",   "#34495e",   "#f77067",   "#d35400",  "#1abc9c", "#8e44ad"
    ];
    for (i in dataJson.dataJSON) {
        const r = dataJson.dataJSON[i];

        const container = `${r.category}`
        console.log(container)
        var div = document.getElementById(container);

        const backgroundColor = colors[i % colors.length];
        
        const toAddContent = `<div class="item-wrapper" style="background-color: ${backgroundColor};" onclick="order('${r.uuid}')">
            <span class="name">${r.name}</span>
            <span class="price">${r.price}</span>
            <span class="description">${r.description}</span>
            </div>
        `

        div.insertAdjacentHTML('beforeend', toAddContent);
    }
}

function order(uuid) {
    window.location = `/order?${uuid}`;
}

getData()