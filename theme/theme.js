/*Сделайте страничку с возможность выбора темы из выпадающего списка 
(например, темная, белая, синяя). 
После выбора темы меняйте фон документа согласно выбранному цвету.*/
/*function selecttheme() {
    document.getElementById ('day')
    .style.backgroundColor = '#fdf7ee';
    document.getElementById ('day')('#foo').classList.add('myClass');
}*/
function selecttheme() {
document.getElementById ('day').addEventListener('onchange'
, () => {
  document.getElementById ('day')('foo').classList.add('myClass');
});
}