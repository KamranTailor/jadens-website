async function onPageLoad() {
    insertHeader();
    insertFooter();
}


async function insertHeader() {
    const response = await fetch ('/items/header.html');
    const data = await response.text();

    var header = document.createElement("div");
    header.innerHTML = data;
    var body = document.body;

    // Insert the new element at the beginning of the body
    body.insertBefore(header, body.firstChild);
}

async function insertFooter() {
    const response = await fetch ('/items/footer.html');
    const data = await response.text();

    var footer = document.createElement("div");
    footer.innerHTML = data;
    var body = document.body;

    // Insert the new element at the beginning of the body
    body.appendChild(footer);
}

function smallShow() {
    var small = document.getElementById('small');
    var menu_open = document.getElementById('showM');
    var menu_close = document.getElementById('closeM');

    small.style.display = 'flex'; 
    menu_open.style.display = 'none'; 
    menu_close.style.display = 'block'; 
};

function smallClose() {
    var small = document.getElementById('small');
    var menu_open = document.getElementById('showM');
    var menu_close = document.getElementById('closeM');

    small.style.display = 'none'; 
    menu_close.style.display = 'none'; 
    menu_open.style.display = 'block'; 
}

document.addEventListener('DOMContentLoaded', onPageLoad);