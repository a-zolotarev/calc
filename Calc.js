// КАЛЬКУЛЯТОР 
function calc (math, a, b) {
  // ошибки 
  if (math, a, b === undefined){
    alert ('Не указано значение для одного или более параметров')
  }
  else if (typeof math !== 'string' || typeof a !== 'number' || typeof b !== 'number'){
    alert ('Недопустимый тип данных для параметра')
  }
  else if (math !== 'sum' && math !== 'min' 
  && math !== 'div' && typeof math == 'string'){
    alert ('Неизвестный оператор')
  }
  else if (math == 'div' && b == 0){
    alert ('Делить на ноль нельзя')
  }
  // операции
  else if (math == 'sum') {
    alert (a + b)
  }
  else if (math == 'min') {
    alert (a - b)
  }
  else if (math == 'div') {
    alert (a / b)
  }
}
// проверка 
calc ('sum',5,5) // 10
calc ('min',4,10) // -6
calc ('div',10,2) // 5
calc (6) // не указаны значения
calc ('div',5,0) // делить на ноль нельзя 
calc ('fgff',5,6) // неизвестный оператор
calc ('sum',5,'tt') // недопустимый тип данных 
