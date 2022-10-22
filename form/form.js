/*Сделайте красивую форму регистрации из любого используемого вами сервиса
 (минимум 5 полей ввода), например, регистрация в Яндексе,
  Гугле или на любом другом сайте. 
  Если какое-то из полей не заполнено или заполнено неверно,
   выводите сообщение об ошибке. 
   Условия проверки для каждого поля придумайте самостоятельно. 
Если все заполнено верно, то выведите "Добро пожаловать, имя пользователя!".*/

function check () {
let reg_last_name = document.getElementById ('reg_last_name');
let reg_first_name = document.getElementById ('reg_first_name');


document.getElementById ('error')
.innerHTML=" ";

if (reg_last_name.value == '') {
document.getElementById ('error')
.innerHTML+= "Это обязательное поле<br>";
}
if (reg_first_name.value == '') {
    document.getElementById ('error')
    .innerHTML+= "Это обязательное поле<br>";
    reg_first_name.value.placeholder = error;
    }

}