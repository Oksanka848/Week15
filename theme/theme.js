/*Сделайте страничку с возможность выбора темы из выпадающего списка 
(например, темная, белая, синяя). 
После выбора темы меняйте фон документа согласно выбранному цвету.*/

function selecttheme() {
  if (document.getElementById ('day').value)
  

document.getElementById("wrap").style.background = "aliceblue"; 


  

  if (document.getElementById ('night').value)
  

document.getElementById("wrap").style.background = "gray"; 
  }
