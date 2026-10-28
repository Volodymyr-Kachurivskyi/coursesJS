1. Додано функцію addSelectTab(tab) - запис активної вкладки до localStorage
2. Зконструйовано функцію start(relevant) - активація останньо збереженої активної
вкладки у localStorage
3. Додано обробку події visibilitychange до документа (document)
для виконання завдання синхронізації відображення вкладок між двома вікнами - start_tab.js
4. Додано вибір випадків формування datalist для введення даних нових даних dataListObj у init_const.js
5. Зконструйовано функцію selectOption() формування opton для datalist - create_form.js
  id_npp для development  id_npp брати з NPP - зв'язана таблиця
6. Змінено relation(currentTable, currentRow) на перерівку пов'язаних записів
"Види методичних вказівок" -> "Методичні розробки"
"Склад кафедри" -> "Методичні розробки" || "Наукові статті" || "Тези коференцій"
|| "Професійний розвиток"
7. Проведено констуювання function addUserAction(table, action, item) - додавання змін по таблицях
у змінну userAction - localStorage.js
8. Проведено конструювання function readUserAction() - читання змін userAction та  проведення відповідних
оперцій: insertData(name, item), editData(name, item), removeData(name, item) над обєктами вхідних даних
9. Заборона редагування первинних ключів:
   - формуванння banEdit = {};
   - втановлення заборони item.disabled = "true" у create_form.js;
10. Синхронізація даних по вікнах
- function addUserAction(table, action, item) - запис активностей користувача
- function lastUserAction(lastTime) - визначення дій користувача
у другому вікні при переході на перше вікно та навпаки та внесення фіксованих змін
- function readUserAction() внесення змін до таблиць при першову відкритті
- ініціалізації сесії - function initSession()
- встановлення function setSessionActivate() прапорця для сесії:
true (перше завантаження); false (подальші звернення до вікна)
- function setSessionTime() - встановлення нового часу повернення до вікна
- function getSessionActivate() - визначення чи перше відкриття вікна чи повернення
- function getSessionTime() - визначення часу остньої активації вікна
