const form = document.querySelector('.form');
const name = document.getElementById('name');
const number = document.getElementById('number');
const date = document.getElementById('date');
const table = document.getElementById("table");


const bankname = document.getElementById('bankname');

const paysystem = document.getElementById('paysystem');

const card = document.querySelector('.card');

/*  SHOW ERROR  */
function showError(element, error) {
    if(error === true) {
        element.style.opacity = '1';
    } else {
        element.style.opacity = '0';
    }
};

/*  CHANGE THE FORMAT BANKNAME  */
bankname.addEventListener('input', function() {
    let alert4 = document.getElementById('alert-4');
    
    if (this.value == "Сбербанк") {
        var img = document.createElement('img');
        img.src = "https://finproekt24.ru/wp-content/uploads/2022/07/b657d15a00ec8fd5ff0ce2099edfd7e8-1.png"
        img.width = 85
        img.height=50
        container = document.querySelector('#image-container1');
        container.append(img);
    }

    if (this.value == "ВТБ") {
        var img = document.createElement('img');
        img.src = "https://filearchive.cnews.ru/img/book/2021/11/03/1920pxvtblogo2018.svg.png"
        img.width = 85
        img.height=50
        container = document.querySelector('#image-container1');
        container.append(img);
    }

    if (this.value == "Тинькофф") {
        var img = document.createElement('img');
        img.src = "https://amursvarka.ru/wp-content/uploads/2022/02/tinkoff-bank-general-logo-10.png"
        img.width = 85
        img.height=50
        container = document.querySelector('#image-container1');
        container.append(img);
    }

    if (this.value == "Уралсиб") {
        var img = document.createElement('img');
        img.src = "https://aif-s3.aif.ru/images/029/208/d3d25a5ccdb043ba2a9fb9ac5f81a0f0.png"
        img.width = 85
        img.height=50
        container = document.querySelector('#image-container1');
        container.append(img);
    }
    
    let error = this.value === '';
    showError(alert4, error);
    
});

/*  CHANGE THE FORMAT PAYSYSTEM  */
paysystem.addEventListener('input', function() {
    let alert5 = document.getElementById('alert-5');
    
    
    if (this.value == "VISA") {
        var img = document.createElement('img');
        img.src = "https://1000logos.net/wp-content/uploads/2022/07/Logo-Visa-2048x1152.png"
        img.width = 50
        img.height=40
        container = document.querySelector('#image-container');
        container.append(img);
    }
    
    if (this.value == "MasterCard") {
        var img = document.createElement('img');
        img.src = "https://tver.mrflowers.ru/local/templates/szd_florist_main/images/new/payment_logo/mastercard-logo.png"
        img.width = 50
        img.height=40
        container = document.querySelector('#image-container');
        container.append(img);
    }

    if (this.value == "МИР") {
        var img = document.createElement('img');
        img.src = "https://static.tildacdn.com/tild3665-3366-4239-b533-613030653466/mir.png"
        img.width = 50
        img.height=40
        container = document.querySelector('#image-container');
        container.append(img);
    }

    let error = this.value === '';
    showError(alert5, error);
    
    
});

/*  CHANGE THE FORMAT NAME  */
name.addEventListener('input', function() {
    let alert1 = document.getElementById('alert-1');
    let error = this.value === '';
    showError(alert1, error);
    document.getElementById('card-name').textContent = this.value;
});

/*  CHANGE THE FORMAT CARD NUMBER*/
number.addEventListener('input', function(e) {
    this.value = numberAutoFormat();

    //show error when is different of 16 numbers and 3 white space
    let error = this.value.length !== 19;
    let alert2 = document.getElementById('alert-2');
    showError(alert2, error);

    document.querySelector('.card__number').textContent = this.value;
});

function numberAutoFormat() {
    let valueNumber = number.value;
    // if white space change to ''. If is not a number between 0-9 change to ''
    let v = valueNumber.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    // the value got min of 4 digits and max of 16
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (i = 0; i < match.length; i += 4) {
        // after 4 digits add a new element to the Array
        // e.g. "4510023" -> [4510, 023]
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        // add a white space after 4 digits
        return parts.join(' ');
    } else {
        return valueNumber;
    }
};

/*  CHANGE THE FORMAT DATE  */
date.addEventListener('input', function(e) {
    this.value = dateAutoFormat();
    
    // show error if is not a valid date
    let alert3 = document.getElementById('alert-3');
    showError(alert3, isNotDate(this));

    let dateNumber = date.value.match(/\d{2,4}/g);
    document.getElementById('month').textContent = dateNumber[0];
    document.getElementById('year').textContent = dateNumber[1];
});

function isNotDate(element) {
    let actualDate = new Date();
    let month = actualDate.getMonth() + 1; // start january 0 we need to add + 1
    let year = Number(actualDate.getFullYear().toString().substr(-2)); // 2022 -> 22
    let dateNumber = element.value.match(/\d{2,4}/g);
    let monthNumber = Number(dateNumber[0]);
    let yearNumber = Number(dateNumber[1]);
    
    if(element.value === '' || monthNumber < 1 || monthNumber > 12 || yearNumber < year || (monthNumber <= month && yearNumber === year)) {
        return true;
    } else {
        return false;
    }
}

function dateAutoFormat() {
    let dateValue = date.value;
    // if white space -> change to ''. If is not a number between 0-9 -> change to ''
    let v = dateValue.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    // min of 2 digits and max of 4
    let matches = v.match(/\d{2,4}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (i = 0; i < match.length; i += 2) {
        // after 4 digits add a new element to the Array
        // e.g. "4510023" -> [4510, 023]
        parts.push(match.substring(i, i + 2));
    }

    if (parts.length) {
        // add a white space after 4 digits
        return parts.join('/');
    } else {
        return dateValue;
    }
};





function foo(){
    td4 = document.getElementById('paysystab');
        td4.innerText = paysystem.value;
    td3 = document.getElementById('banktab');
        td3.innerText = bankname.value;
    td2 = document.getElementById('dattab');
        td2.innerText = date.value;
    td1 = document.getElementById('numtab');
        td1.innerText = number.value;
    td = document.getElementById('namtab');
        td.innerText = name.value;
       
    form.reset()
    document.getElementById('card-name').textContent = ''
    document.getElementById('card__number').textContent = "0000   0000   0000  0000"
    document.getElementById('month').textContent = ''
    document.getElementById('year').textContent = ''
    document.getElementById('image-container').textContent = ''
    document.getElementById('image-container1').textContent = ''
    }

/*  VALIDATION FORM WHEN PRESS THE BUTTON   */
form.addEventListener('submit', function (e) {
    
    
    
    // 1. if there is not any name
    // 2. if the length of the number card is not valid (16 numbers and 3 white space)
    // 3. if is not a valid date (4 number and "/" or is not a valid date)
    // 4. if is not a valid cvv

    if(name.value === '' || number.value.length !== 19 || date.value.length !== 5 || isNotDate(date) === true) {
        e.preventDefault()
    }
    
    
        
    
    // 5. if any input is empty show the alert of that input
    let input = document.querySelectorAll('input');
    for( i = 0; i < input.length; i++) {
        if(input[i].value !== '') {
            input[i].nextElementSibling.style.opacity = '1';
            }
        } 

    
    }

    
);



