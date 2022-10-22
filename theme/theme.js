/*Сделайте страничку с возможность выбора темы из выпадающего списка 
(например, темная, белая, синяя). 
После выбора темы меняйте фон документа согласно выбранному цвету.*/
function selecttheme () {
  if (document.getElementById('theme').value=='day')
  document.getElementById('wrap').style.background = "aliceblue"; 


if (document.getElementById('theme').value=='night')
document.getElementById('wrap').style.background = "grey";


if (document.getElementById('theme').value=='even')
document.getElementById('wrap').style.background = "#A993BF";


if (document.getElementById('theme').value=='mon')
document.getElementById('wrap').style.background = "#F7CE68";

}
