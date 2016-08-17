/**
 Имеется поле input, в котором через запятую введены данные в формате:

 <День недели>: < время работы>. Пример: "Пн: 8:00, Вт: 15:00, Вт: 16:00, Ср: 17:30";

 Напишите JS функцию, которая на вход принимает данную строку и форматирует ее таким

 образом, чтобы все подряд идущие минуты в предлелах одного дня заменялись на тире, а

 дни отделялись точкой с запятой.

 Пример:

 Входная строка "Пн: 8:00, Вт: 15:00, Вт: 15:30, Вт: 16:00, Вт: 17:00, Ср: 17:30";

 Выходная строка "Пн: 8:00; Вт: 15:00-16:00, 17:00; Ср: 17:30";

 Условия:

 1. За ШАГ брать пол часа.

 2. Время и дни могут идти не по порядку, например:

 "Ср: 17:30, Пн: 8:00, Вт: 15:30, Вт: 15:00, Вт: 16:00";

 3. В выходной строке все должно идти по порядку.
*/
var thank = "Thank you for your time";

var start_list = "Пт: 15:30, Пт: 18:30, Пн: 8:30, Пн: 10:00, Вт: 17:30, Вт: 15:30, Вт: 16:00, Чт: 17:00, Чт: 18:00, Ср: 17:30";

var arr_end = start_list.split(", "); //разбиваем строку

var test = {}; //массив без сортировки
var next = {}; //отсортированые дни по порядку

var x = 60*24; //max минут в сутках
var min = [[x],[x],[x],[x],[x],[x],[x]]; //для определения начальных значений по каждому дню
var max = [[0],[0],[0],[0],[0],[0],[0]]; //

var i = [[0],[0],[0],[0],[0],[0],[0]]; //счетчик для сортировки
var final = ''; //финальная строка

function start(index){
    var a = index.split(" ");
    var b = a[1].split(":");
    var hour = Number(b[0]*60);
    var minutes = Number(b[1]);
    var c = Number(hour + minutes);
    return c;
} //количество заданых минут
function min_time(min, c){
    if (min > c) {
        min = c;
    }return min;
}//время работы с
function max_time(max, c){
    if (max < c) {
        max = c;
    }return max;
} //время работы до

function check(n,arr,day){
    var c = start(arr);
    max[n] = max_time(max[n], c);
    min[n] = min_time(min[n], c);
        if(i[n] != 0){
            var res_min;
                if(min[n]%60){
                    res_min = (min[n]/60 >> 0)+ ":" + (min[n]%60);
                }else{
                    res_min = (min[n]/60)+ ":" + "00";
                }

                var res_max;
                if(max[n]%60){
                    res_max = (max[n]/60 >> 0)+ ":" + (max[n]%60);
                }else{
                    res_max = (max[n]/60)+ ":" + "00";
                }
            next[n] = day + " " + res_min + "-" + res_max;
        }else{
            next[n] = arr;
        }
    i[n] = +1;
    return next[n];
}//проверяем каждый день используя функции (start(), min_time(), max_time())

for (var index = 0; index < arr_end.length; ++index){

 test[index] = arr_end[index].split(" ");

    switch (test[index][0]){
      case 'Пн:':
          check(0,arr_end[index],'Пн:');
          break;
      case 'Вт:':
          check(1,arr_end[index],'Вт:');
          break;
      case 'Ср:':
          check(2,arr_end[index],'Ср:');
          break;
      case 'Чт:':
          check(3,arr_end[index],'Чт:');
          break;
      case 'Пт:':
          check(4,arr_end[index],'Пт:');
          break;
      case 'Сб:':
          check(4,arr_end[index],'Сб:');
          break;
      case 'Вс:':
          check(4,arr_end[index],'Вс:');
          break;
    }
}//сортируем и проверяем дни недели

for (var id= 0; id < Object.keys(next).length; ++id){
  final =  final + next[id] + "; ";
}//переводим обьект в нужный формат

console.log(thank);

document.write(final);









