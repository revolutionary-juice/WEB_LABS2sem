function showInputs() {
    const formType = document.getElementsByName("formType");
    let checkedFormType = null;

    for (let i = 0; i < formType.length; i++) {
        if (formType[i].checked) {
            checkedFormType = formType[i].value;
            break;
        }
    }

    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = '';

    if (checkedFormType === 'algebraic') {
        inputFields.innerHTML = `
            <label>Действительная часть: <input type="number" id="realPart"></label><br>
            <label>Мнимая часть: <input type="number" id="imaginaryPart"></label>
        `;
    } else if (checkedFormType === 'exponential') {
        inputFields.innerHTML = `
            <label>Модуль: <input type="number" id="modulus" min="0"></label><br>
            <label>Аргумент (в градусах): <input type="number" id="argument" min="0" max="360"></label>
        `;
    }
}

function validateInputs() {
    let isValid = true;

    
    const formTypeRadios = document.getElementsByName("formType");
    let checkedFormType = null;
    for (let i = 0; i < formTypeRadios.length; i++) {
        if (formTypeRadios[i].checked) {
            checkedFormType = formTypeRadios[i].value;
            break;
        }
    }

    
    const inputs = document.getElementById('inputFields').getElementsByTagName('input');
    const operationsDiv = document.getElementById('operations');
    const operations = document.getElementsByName('operation');

    
    let operationSelected = false;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].checked) {
            operationSelected = true;
            break;
        }
    }

    if (!operationSelected) {
        operationsDiv.classList.add('error');
        isValid = false;
    } else {
        operationsDiv.classList.remove('error');
    }

    
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.classList.remove('error'); 

        if (input.value === '' || isNaN(input.value)) {
            input.classList.add('error');
            isValid = false;
        } else if (checkedFormType === 'exponential' && input.id === 'modulus' && parseFloat(input.value) < 0) {
            input.classList.add('error'); 
            isValid = false;
        } else if (checkedFormType === 'exponential' && input.id === 'argument' && (parseFloat(input.value) < 0 || parseFloat(input.value) > 360)) {
            input.classList.add('error'); 
            isValid = false;
        }
    }

    return isValid;
}

function calculate() {
    if (!validateInputs()) {
        document.getElementById('output').innerHTML = '<p class="error">Ошибка: некорректные данные или не выбрана операция!</p>';
        return;
    }

    
    const formTypeRadios = document.getElementsByName("formType");
    let checkedFormType = null;
    for (let i = 0; i < formTypeRadios.length; i++) {
        if (formTypeRadios[i].checked) {
            checkedFormType = formTypeRadios[i].value;
            break;
        }
    }

    const operations = document.getElementsByName('operation');
    const output = document.getElementById('output');
    output.innerHTML = '';

    let real, imaginary, modulus, argument;

    if (checkedFormType === 'algebraic') {
        real = parseFloat(document.getElementById('realPart').value);
        imaginary = parseFloat(document.getElementById('imaginaryPart').value);
        modulus = Math.sqrt(real * real + imaginary * imaginary);
        argument = Math.atan2(imaginary, real) * (180 / Math.PI);

        
        if (real === 0 && imaginary === 0) {
            output.innerHTML = '<p class="error">Ошибка: Невозможно вычислить аргумент для нулевого числа!</p>';
            return;
        }
    } else if (checkedFormType === 'exponential') {
        modulus = parseFloat(document.getElementById('modulus').value);
        argument = parseFloat(document.getElementById('argument').value);
        real = modulus * Math.cos(argument * Math.PI / 180);
        imaginary = modulus * Math.sin(argument * Math.PI / 180);

        
        if (modulus === 0) {
            output.innerHTML = '<p class="error">Ошибка: Невозможно преобразовать нулевое число в алгебраическую форму!</p>';
            return;
        }
    }

  
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].checked) {
            switch (operations[i].value) {
                case 'argument':
                    output.innerHTML += `<p>Аргумент: ${argument.toFixed(2)}°</p>`;
                    break;
                case 'imaginary':
                    output.innerHTML += `<p>Мнимая часть: ${imaginary.toFixed(2)}</p>`;
                    break;
                case 'modulus':
                    output.innerHTML += `<p>Модуль: ${modulus.toFixed(2)}</p>`;
                    break;
                case 'convert':
                    if (checkedFormType === 'algebraic') {
                        output.innerHTML += `<p>Показательная форма: ${modulus.toFixed(2)} * e^(i${argument.toFixed(2)}°)</p>`;
                    } else {
                        output.innerHTML += `<p>Алгебраическая форма: ${real.toFixed(2)} + ${imaginary.toFixed(2)}i</p>`;
                    }
                    break;
            }
        }
    }
}

function resetForm() {
    document.getElementById('complexForm').reset();
    document.getElementById('inputFields').innerHTML = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('operations').classList.remove('error');

    const inputs = document.getElementById('inputFields').getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('error');
    }
}


document.addEventListener('DOMContentLoaded', showInputs);