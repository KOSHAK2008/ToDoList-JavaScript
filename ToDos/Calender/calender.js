//Функция проверки на высокосный год
function isLeapYear(year){ return (year % 4 == 0)}
  
//Функция возвращает колличество дней в месяце в зависимости от года
function getDays(month, year)
{
 // Создаем массив, для хранения числа дней в каждом месяце
 var ar = new Array(12);
 ar[0] = 31; // Январь
 ar[1] = (isLeapYear(year)) ? 29 : 28 ;// Февраль
 ar[2] = 31; // Март
 ar[3] = 30; // Апрель
 ar[4] = 31; // Май
 ar[5] = 30; // Июнь
 ar[6] = 31; // Июль
 ar[7] = 31; // Август
 ar[8] = 30; // Сентябрь
 ar[9] = 31; // Остябрь
 ar[10] = 30; // Ноябрь
 ar[11] = 31; // Декабрь
 return ar[month]
}

//Функция возвращает название месяца
function getMonthName(month)
{
 // Создаем массив, для хранения названия каждого месяца
 var ar = new Array(12);
ar = ["Январь", "Февраль", "Март", "Апрель","Май", "Июнь", "Июль", "Август", "Сентабрь", "Октябрь", "Ноябрь", "Декабрь"];
}

// Функция установки настроек календаря с последующей прорисовкой
function setCalendar()
{

 // Параметры настройки таблицы
 var tableBgColor = "#f0fff0"; //Цвет фона таблицы
 var headerHeight = 15; // Высота ячеки заголовка с названием месяца
 var border = 1; // Рамка
 var cellspacing = "1"; // Промежуток между ячейками
 var cellpadding = "1"; // Свободное пространство между содержимым ячейки и её границами

 var headerColor = "#ffffff"; // Цвет текста заголовка в ячейке
 var headerBgColor = "#006000"; // Цвет фона в ячейке заголовка
 var headerSize = "2"; // Размер шрифта заголовка
 var headerBold= true; // Полужирный шрифта заголовка

 var colWidth = 30; // Ширина столбцов в таблице

 var dayCellHeight = 10; // Высота ячеек содержащих дни недели
 var dayColor = "#006000"; // Цвет шрифта, представляющего дни недели
 var dayBgColor = "#ffffff"; // Цвет фона ячеек содержащих дни недели
 var dayBold= true; //Размер шрифта, представляющего дни недели
 var daySize = 2; // Полужирный шрифт представляющий дни недели

 var cellHeight = 20; // Высота ячеек, представляющих даты в календаре

 var todayColor = "red"; // Цвет, определяющий сегодняшнюю дату в календаре
 var todayBgColor = "#e0efe0"; // Цвет фона ячейки с сегодняшней датой
 var todayBold = true; // Полужирный шрифт представляющий сегодняшнюю дату в календаре
 var todaySize = 2; //Размер шрифта, представляющего сегодняшнюю дату в календаре

 var allDayColor = "#000000"; // Цвет, остальных дней в календаре
 var allDayBgColor = "#e0efe0"; //Цвет фона остальных ячеек
 var allDayBold= false; // Полужирный шрифт представляющий остальные дни
 var allDaySize= 2; //Размер шрифта, представляющего остальные дни


 // Переменные
 var now = new Date();
 var year = now.getYear()+1900;
 var month = now.getMonth();
 var monthName = getMonthName(month);
 var date = now.getDate();
 now = null;
 var firstDayInstance = new Date(year, month, 1);
 var firstDay = firstDayInstance.getDay()+8;
 firstDayInstance = null;
 // Число дней в текущем месяце
 var lastDate= getDays(month, year);
 // Создаем основную структуру таблицы
 var text = "";
 text += '<table border=' + border + ' cellspacing=' + cellspacing +
    ' cellpadding='+cellpadding+' bgcolor='+tableBgColor+'>' +
    '<th colspan=7 height=' + headerHeight +' bgcolor='+headerBgColor+ '>' +
    '<font color="' + headerColor + '" size=' + headerSize + '>';
 if(headerBold)text+='<tb>';
 text += monthName + ' ' + year;
 if(headerBold)text+='</b>';
 text += '</font>';
 text += '</th>';
 var openCol = '<td width=' + colWidth + ' height=' + dayCellHeight + ' bgcolor='+
  dayBgColor+'>';
 openCol+='<font color="' + dayColor + '" size='+daySize+'>';
 if(dayBold)openCol+='<tb>';
 var closeCol = '</font></td>';
 if(dayBold)closeCol='</b>'+closeCol;
 
 // Создаем массив сокращенных названий дней недели
 var weekDay = new Array(7);
  weekDay = ["Пн","ВТ","Ср","Чт","Пт","Сб","Вс"];
 text += '<tr align="center" valign="center">';
 for (var dayNum = 0; dayNum < 7; ++dayNum)
 {
  text += openCol + weekDay[dayNum] + closeCol
 }
 text += '</tr>';
 var digit = 1;
 var curCell = 2;
 for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row)
 {
  text += '<tr align="right" valign="top">';
  for (var col = 1; col <= 7; ++col)
  {
   if (digit > lastDate) break;
   if (curCell < firstDay)
   {
    text += '<td><font size='+allDaySize+' color='+allDayColor+
     '> </font></td>';
    curCell++
   }
   else
   {
    if (digit == date)
    { // Текущая ячейка представляет сегодняшнюю дату
     text += '<td height=' + cellHeight + ' bgcolor='+todayBgColor+'>';
     text += '<font color="' + todayColor + '" size='+todaySize+'>';
     if(todayBold)text +='<b>';
     text += digit;
     if(todayBold)text +='</b>';
     text += '</font>';
    
     text += '</td>'
    }
    else
    {
     text += '<td height=' + cellHeight + ' bgcolor='+allDayBgColor+
        '><font size='+allDaySize+' color='+allDayColor+'>';
     if(allDayBold)text +='<b>';
     text +=digit;
     if(allDayBold)text +='</b>';
     text +='</font></td>'
    }
    digit++
   }
  }
  text += '</tr>';
 }
 text += '</table>';
 // Выводим полученную строку
 document.write(text)
}