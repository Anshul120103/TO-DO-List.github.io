function getUpdate() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('desc').value;
    if (tit == "") {
        return
    }
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = []
        localStorage.setItem('itemsJson', Json.stringify(itemJsonArray))
    }

    else {
        itemJsonArraystr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArraystr)
    }

    tableBody = document.getElementById('tableBody')
    str = ''
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
                <td scope="row">${index + 1}</td>
                <td scope="row">${element[0]}</td>
                <td scope="row">${element[1]}</td>
                <td scope="row"><button id="delete" onclick="deleted(${index})">Delete</button></td>
            </tr>`
    });
    tableBody.innerHTML = str
}

function deleted(itemIndex) {
    itemJsonArraystr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArraystr)
    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update()
}

function clearData() {
    if (confirm("Do you really want to clear list?")) {
        localStorage.clear()
        update()
    }
}
update()