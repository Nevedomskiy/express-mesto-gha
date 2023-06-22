[![Tests](../../actions/workflows/tests-13-sprint.yml/badge.svg)](../../actions/workflows/tests-13-sprint.yml) [![Tests](../../actions/workflows/tests-14-sprint.yml/badge.svg)](../../actions/workflows/tests-14-sprint.yml)
# Проект Mesto фронтенд + бэкенд

## Ссылка на репозиторий для контроля прохождения автотестов 
https://github.com/Nevedomskiy/express-mesto-gha/actions/workflows/tests-13-sprint.yml

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
Остальные директории вспомогательные, создаются при необходимости разработчиком

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload

**0. О себе** - Здравстуйте! Меня зовут Василий, 24 года, город Саратов. Последний год занимаюсь веб-программированием. Веб-разработка очень разнообразна и увлекательна, на сегодняшний день успел применить на практике адаптивную верстку(HTML,CSS), JS, принципы ООП, настройку валидации форм, настройку и сборку проекта WEBPACK-ом, работал c React-ом, контроль версий выполняю с помощью Git-а, на данном этапе практикуюсь в написании бекэнд части.
Для меня важно, чтобы результат моей работы приносил пользу, а опыт полученный при её выполнении был релевантен и востребован.
Моя мотивация - это желание своими решениями и упорной работой, добиться интеллектуального роста и благополучия.

Открыт к общению и предложениям по работе:
- Телефон +79170282770
- Телеграмм https://t.me/VasiliyNevedomskiy
- Вотсап https://wa.me/qr/HDTMZCGIFVF2N1

Резюме - https://saratov.hh.ru/resume/1309bbf3ff0be5c57f0039ed1f636655475242

**1. Название проекта** - "Проект: Место-Бэкенд". Проектная работа №13-14.

**2. Назначение** - Данный проект используется для закрепленния теоритеческого материала в программе обучения ЯндексПрактикума "Веб-разработчик". В результате выполнения ПР4-9,12 из макетов FIGMA был сверстан адаптивный сайт, который в последующем был запушен на GITHAB и с помощью Diploy выложен в публичный доступ - [Ссылка на сайт] - (https://nevedomskiy.github.io/react-mesto-auth/). Во время 12 спринта, фукнциональность предыдущих работ, была доработана с помощью React. В процессе выполнения 13-14 спринта, написана бекэнд часть приложения Место.



**Во время 13 спринта были изучены и применены методы:**
   - Серверная разработка на Node.js:
      * Тело запроса: потоки;
      * Система модулей Node.js;
      * Работа с файловой системой;
      * Потоки для чтения и записи файлов;
      * Отладка Node.js приложения;
      * Тестирование сервера: Postman;
      * Маршрутизация компьютерных сетей;

   -Express.js:
      * Настройка роутинга;
      * middlewares;
      * Продвинутые мидлвэры: парсер данных;
      * Отдача html и статичных файлов в Express;
      * Кеширование ответа сервера;
      * CORS. Обработка ошибок;

    -Базы данных:
      * Какие бывают базы. SQL и NoSQL;
      * MongoDB;
      * Подключение к mongo из JavaScript. Mongoose;
      * Схемы и модели;
      * Как структурировать код. Контроллеры;

    -Обработка ошибок:
      * Способы обработки;
      * Глобальные обработчики ошибок и кастомные ошибки;
      * Подходы к определению типа ошибки;    

**Во время 14 спринта были изучены и применены методы:**
    - Аутентификация и авторизация:
      * Создание пользователя;
      * Собственные методы моделей Mongoose;
      * Автоматическая аутентификация;
      * Защита роутов авторизацией;      

    -Обработка ошибок и валидация приходящих данных:
      * Централизованная обработка ошибок;
      * Валидация приходящих на сервер данных;
      
    -Безопасность веб-приложения:
      * Межсайтовый скриптинг (XSS);
      * Способы хранения JWT в браузере;
      * Межсайтовая подделка запроса (CSRF);
      * Создание и хранение секретных ключей;
      * Использование внешних компонентов;

    -Регулярные выражения:
      * Методы и флаги;
      * Спецсимволы и их обратные классы;
      * Наборы и диапазоны;    
      * Квантификаторы;
      * Начало и конец строки. Флаг m;
      * Методы для регулярных выражений;   
      
    -Регулярные выражения:
      * Области видимости изнутри;
      * Замыкание;
      * Замыкания на практике;          
