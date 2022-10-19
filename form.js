let input = document.getElementsByTagName ('input').value;
input.onchange = function() {
    if (getElementsByTagName ('input').value === '') alert ("Это обязательное поле"); 
    else alert ('Добро пожаловать, ${name}');
}