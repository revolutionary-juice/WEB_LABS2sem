document.addEventListener("DOMContentLoaded", function() {
    createTable(videoGames, 'list');

    let searchButton = document.getElementById("filterButton");
    searchButton.addEventListener("click", function() {
        filterTable(videoGames, 'list', searchButton.form)
    });

})

//выводим таблицу на страницу
let createTable = (data, idTable) => {
    // находим таблицу
    let table = document.getElementById(idTable);

    // формируем заголовочную строку из ключей нулевого элемента массива
    let tr = document.createElement('tr');

    for(key in data[0]) {
        let th = document.createElement('th');
        th.innerHTML = tableHeader[key];
        tr.append(th);
    }
    table.append(tr);

    data.forEach((item, ind) => {
        let tr = document.createElement('tr');
        for (let key in item) {
            let th = document.createElement('td');
            th.innerHTML = item[key];
            tr.append(th);
        }
        table.append(tr);
    });
}

let clearTable = (idTable) => {
    let table = document.getElementById(idTable);
    table.innerHTML = "";
}