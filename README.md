# Домашнее задание к занятию «Операторы цикла, функции, объекты»

### Цель задания


В результате выполнения этого задания вы сможете:

1. Освоить базовые навыки использования средств разработки на платформе NodeJS.
2. Освоить написание кода на JavaScript с использованием операторов цикла, функций и объектов.

### Чеклист готовности к домашнему заданию

1. Для выполнения задания требуется компьютер с операционной системой Windows, MacOS или Linux.
2. На компьютере студента должно быть предварительно установлено IDE VS Code.
3. Для установки платформы NodeJS могут потребоваться соответствующие права доступа в системе.

### Инструкция к заданию

1. Установите платформу NodeJS. Для этого необходимо пройти по ссылке: https://nodejs.org/ru/. Выберите одну из версий для установки (для данного курса несущественно, какая именно версия будет установлена) и далее следуйте инструкциям для загрузки инсталляционного пакета, исходя из установленной на компьютере ОС. Проверьте, что инсталляция успешно завершена, выполнив в командной строке:
```
> node --version
v17.4.0
```
2. Запустите NodeJS в режиме REPL (интерактивное исполнение команд) и попробуйте выполнить простейший оператор вывода текста в консоль:
```
> node
Welcome to Node.js v17.4.0
Type ".help" for more information
> console.log('Hello, World!');
Hello, World!
undefined
>
```
3. В среде разработки VS Code создайте файл index.js. Запишите в него команду вывода в консоль надписи из п.2. Запустите скрипт и посмотрите что получится:
```
node index.js
Hello, World!
```
4. Выполните задания 1 и 2 ниже.

### Инструменты/ дополнительные материалы, которые пригодятся для выполнения задания

1. Среда разработки [VSCode](https://code.visualstudio.com).
2. Платформа [NodeJS](https://nodejs.org/ru).

### Задание 1

В отдельном файле с расширением .js напишите программу, состоящую из функции и кода, вызывающего ее с аргументом, значение которого получается из аргумента командной строки при запуске (используя process.argv[2] для получения первого аргумента). Результат выполнения функции должен выводиться в консоль.

Вызываемая функция должна принимать параметр - количество первых простых чисел, которые необходимо найти.

Функция должна возвращать массив, содержащий первые простые числа, количество которых соответствует переданному при вызове аргументу. 

Для нахождения простых чисел необхоимо использовать один из видов цикла, показанных на уроке. Не должны использоваться статические, предварительно рассчитанные наборы простых чисел.

Примечание: простыми в математике называются числа, которые делятся без остатка только на 1 и на самих себя. Например, такими числами являются: 2, 3, 5, 7, 11, 13 и т.д. Для проверки делимости одного числа на другое можно использовать оператор получения остатка от деления %, в случае если он дает 0 в результате, делимость подтверждается:
```
if (4 % 2 === 0) { console.log('И все таки оно делится!') };
```
Необязательная часть задания*. Для сравнения рекомендуем написать аналогичную программу на Python и сравнить быстродействие программ, запуская их на большом значении аргумента, например, 100 000 и засекая время. В JS можно засекать время выполнения кода, если до него вызвать функцию console.time() и console.timeEnd() после. Сравните сложность написания аналогичного кода на Python и JavaScript.

### Задание 2
В отдельном файле с расширением .js напишите программу, включающую в себя начальную инциализацию основных объектов, которые могут быть использованы для работы Интернет-магазина одежды:

Каталог товаров в виде массива объектов, содержащих поля: 
```
 id            Код товара
 name          Наименование
 description   Описание
 sizes         массив возможных размеров
 price         цена товара
 available     Признак доступности для продажи
```
Корзина в виде массива объектов, содержащих поля:
```
good           ссылка на товар в каталоге
amount         количество товара в корзине
```
Создайте в коде несколько (не менее 5) товаров в каталоге и несколько (не менее 2) товаров в корзине.

Реализуйте функции добавления товара в корзину и удаления одного товара из нее, а также функцию полной очистки корзины.

Реализуйте функцию вычисления общего количества и стоимости товаров в корзине. Функция должна возвращать объект, содержащий поля:
```
totalAmount    Общее количество товаров в корзине
totalSumm      Общая стоимость товаров в корзине
```
В основном коде программы вызовите несколько раз реализованные функции с необходимыми аргументами. В конце вызовите функцию подсчета сумм и результат ее выполнения выведите в консоль.

### Правила приема работы

1. Задание необходимо сдавать в виде ссылки на репозиторий в github, содержащий файлы с кодом для каждого из заданий.
2. В случае создания отдельной ветки (branch) для заданий к каждому уроку ссылка, прикрепленная в личном кабинете, должна быть на ветку, содержащую решение данного задания.

### Критерии оценки

1. К заданию прикреплена ссылка на ветку в репозитории, содержащую файлы с кодом для заданий 1 и 2.
2. Код в файлах соответствует заданию и при выполнении не вызывает ошибок времени компиляции или выполнения. В случае необходимости запуска кода с определенными параметрами командной строки, это должно быть описано в виде комментариев в коде.