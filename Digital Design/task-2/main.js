function getDayInfo(str) {
   //массив дней
   let days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
   ];
   //массив месяцев
   let months = [
      'Января ',
      'Февраля ',
      'Марта ',
      'Апреля ',
      'Мая ',
      'Июня ',
      'Июля ',
      'Августа ',
      'Сентября ',
      'Октября ',
      'Ноября ',
      'Декабря '
   ];

   let month = Number(str.substring(3, 5));
   let day = Number(str.substring(0, 2));
   let year = Number(str.substring(8, 10));
   let fullYear = Number(str.substring(6, 10));
   let century = Number(str.substring(6, 8));

   //номер месяца, где Март 1, Январь 11, Февраль 12 (для вечного календаря)
   let m = month - 2;
   if (m <= 0) {
      m = m + 12;
   }

   //год для вечного календаря
   let y = year;
   if ((month == 1) || (month == 2)) {
      if (year == 0) {
         y = 99;
      }
      else {
         y = year - 1;
      }
   }
   //вычисление номера дня недели по вечному календарю
   let week = (day + Math.floor((13 * m - 1) / 5) + Math.floor(5 * y / 4) + Math.floor(-7 * century / 4)) % 7;
   //если остаток от деления отрицательный, прибавляется 7
   if (week < 0) {
      week = week + 7;
   }
   let dayofWeek = days[week];
   //вычисление номера недели
   let weekNum = Math.ceil((Number(str.substring(0, 2)) + week) / 7);
   //результат
   let result = dayofWeek + ', ' + weekNum + ' неделя ' + months[month - 1] + fullYear + ' года';
   return result;
};
console.log(getDayInfo("15.02.2022"));