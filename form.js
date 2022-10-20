/*let button = document.getElementById ('check');
let input = getElementsByTagName ('input').value;
let name = document.getElementById ('first_name');
button.onclick = check;

function check () {
    if (getElementsByTagName ('input').value == '') 
    {alert ("Это обязательное поле"); }
    else {
        
        alert ('Добро пожаловать, ${name}');
    }
}
$(document).ready(function() {
    $('#submit').click(function() {
        var value = document.getElementById('name').value;
        if (value === '') {
            alert('Enter your name');
        }
    })
});*/
/*let name = document.getElementById ('first_name')[0];
/*let button = document.getElementById ('check');

button.onclick = check;

function check () {
        let value = document.getElementsByTagName ('input').value;
        if (value === '') {
            alert('Это обязательное поле');
        }
        else {
            document.getElementsByTagName ('input').style.border = '4em solid black';
            alert ('Добро пожаловать, ${name}');
        }
    }
    /*)

});*/
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