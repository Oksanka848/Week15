function init() {
    let fil = document.getElementById('click').value;
    fil.onclick = check;}
    function check() {

 let fil = document.getElementsByTagName ('input').value;
 let name = document.getElementById ('reg_first_name').value;
    if (fil.value == '') {
         alert ("Это обязательное поле"); }
    else alert(`Привет, ${name} !`);
}

/*function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
   
    }
    function check() {
        var fil = document.getElementByTagName('input');
        if (!fil.checkValidity()) {
            document.getElementByTagName('input').innerHTML = fil.validationMessage;
        }}*/