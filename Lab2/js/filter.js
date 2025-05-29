let correspond = {
    "Название игры": "title",
    "Платформа": "platform",
    "Год создания": ["yearFrom", "yearTo"],
    "Жанр": "genre",
    "Рейтинг": ["ratingFrom", "ratingTo"],
    "Обновление": ["updateFrom", "updateTo"],
    "Ср. длительность, ч": ["gameplayFrom", "gameplayTo"],
    "Количество игроков": ["playersFrom", "playersTo"]
}

function validateInputs(dataForm) {
    let result = true;
    for(let j = 0; j < dataForm.elements.length; j++) {

        let item = dataForm.elements[j];

        if (item.type === "button") continue;

        let valInput = item.value;
        const nameItem = item.name;

        if (nameItem.indexOf("To") !== -1 || nameItem.indexOf("From") !== -1) {
            if (isNaN(valInput) || !isFinite(valInput) ) {
                item.classList.add("error");
                result = false;
            } else {
                item.classList.remove("error");
            }
        }
    }
    return result;
}

function clearFilter(dataForm) {

    for(let j = 0; j < dataForm.elements.length; j++) {
        let item = dataForm.elements[j];
        if (item.type == "button") continue;
        item.value = "";
        item.classList.remove("error");
    }

    clearSort(document.getElementById('sort'));
}

let dataFilter = (dataForm) => {

    let dictFilter = {};
    // перебираем все элементы формы с фильтрами
    for(let j = 0; j < dataForm.elements.length; j++) {

        // выделяем очередной элемент формы
        let item = dataForm.elements[j];

        // получаем значение элемента
        let valInput = item.value;

        // если поле типа text - приводим его значение к нижнему регистру
        if (item.type == "text") {
            valInput = valInput.toLowerCase();
        } else if (item.type == "number") {
            valInput = Number(valInput);
        }

        if (valInput == '') {
            if (item.name.indexOf("From") != -1){
                valInput = -Infinity;
            } else if (item.name.indexOf("To") != -1){
                valInput = Infinity;
            }
        }
        // формируем очередной элемент ассоциативного массива
        if (item.name) dictFilter[item.name] = valInput;
    }
    return dictFilter;
}

// фильтрация таблицы
let filterTable = (data, idTable, dataForm) =>{

    if (!validateInputs(dataForm)) {
        return;
    }
    // получаем данные из полей формы
    let datafilter = dataFilter(dataForm);

    // выбираем данные соответствующие фильтру и формируем таблицу из них
    let tableFilter = data.filter(item => {

        /* в этой переменной будут "накапливаться" результаты сравнения данных
           с параметрами фильтра */
        let result = true;

        // строка соответствует фильтру, если сравнение всех значения из input
        // со значением ячейки очередной строки - истина
        for(let key in item) {

            let val = item[key];

            // текстовые поля проверяем на вхождение
            if (typeof val == 'string') {
                val = item[key].toLowerCase()
                result &&= val.indexOf(datafilter[key]) !== -1;
            } else if (typeof val == 'number'){

                let fr = datafilter[key+"From"];
                let till = datafilter[key+"To"];

                result &&= (val >= fr && val <= till);
            }
            // САМОСТОЯТЕЛЬНО проверить числовые поля на принадлежность интервалу

        }
        return result;
    });

    // САМОСТОЯТЕЛЬНО вызвать функцию, которая удаляет все строки таблицы с id=idTable
    clearTable(idTable);
    // показать на странице таблицу с отфильтрованными строками
    createTable(tableFilter, idTable);
}