function edit_row() {
  // Ідентифікація рядка
  const row = event.target.closest("tr");
  const rowId = row.id;
  // Ідентифікація таблиці, рядка
  const tableCurrent = document.querySelector("table");
  const tableId = tableCurrent.id;
  // Зміна параметрів модального вікна
  let title = document.getElementById("modal_title");
  title.innerHTML = "Редагування даних";
  document
    .getElementById("save")
    .setAttribute("onclick", `save_edit_data("${tableId}","${rowId}")`);
  edit_form(tableId, rowId);

  showModal(rowId);
}
function delete_row() {
  constructNppAss();
  // Ідентифікація рядка
  const row = event.target.closest("tr");
  const rowId = row.id;

  // Ідентифікація таблиці, рядка
  const tableCurrent = document.querySelector("table");
  const tableId = tableCurrent.id;
  const del_row = tableCurrent.querySelector(`tr[id="${rowId}"]`);
  // відгук при перевірці повязаних таблиць

  const response = relation(tableId, rowId);
  console.log("response: ", response);
  if (response[0]) {
    del_row.remove();

    // видалення рядка тільки з таблиці
    let item = {};
    item["id_row"] = rowId;
    removeData(tableId, item);
    addUserAction(tableId, "delete", item);
    showPopap(response[1]);
  } else {
    showPopap(
      "<div>Увага! Видалення рядка не можливо. Є повязані дані: </div>" +
      response[1],
    );
  }
}

function relation(currentTable, currentRow) {
  const curTable = dataObj[currentTable];
  console.log("Поточна таблиця для видалення", curTable);
  let answer = [];
  let message = "";
  switch (currentTable) {
    case "npp":
      let use_D = true;

      use_D = !DEVELOPMENT.some((item) => item["id_npp"] == currentRow);
      use_D ? message : (message += "<div>Таблиця: Професійний розвиток</div>");
      console.log("use_D", use_D);
      let use_A = !ARTICLES.some((item) =>
        item["all_authors"].includes(assNpp[currentRow]),
      );
      console.log("use_A", use_A);
      use_D &&= use_A;

      use_A ? message : (message += "<div>Таблиця: Наукові статті</div>");
      let use_T = !THESIS.some((item) =>
        item["all_authors"].includes(assNpp[currentRow]),
      );
      console.log("use_T", use_T);
      use_D &&= use_T;
      use_T ? message : (message += "<div>Таблиця: Тези</div>");
      let use_M = !METHODICAL.some((item) =>
        item["author"].includes(assNpp[currentRow]),
      );
      console.log("use_M", use_M);
      use_D &&= use_M;
      use_M ? message : (message += "<div>Таблиця: Методичні розробки </div>");
      console.log("use_D", use_D);
      if (use_D) {
        answer.push(use_D, "Рядок видалено.");
      } else {
        answer.push(use_D, message);
      }
      break;
    case "refmethod":
      let use_Met = !METHODICAL.some((item) => item["id_type"] == currentRow);
      use_Met
        ? message
        : (message += "<div>Таблиця: Методичні розробки </div>");
      if (use_Met) {
        answer.push(use_Met, "Рядок видалено.");
      } else {
        answer.push(use_Met, message);
      }
      break;
    default:
      answer.push(true, `Видалено рядок з таблиці ${currentTable}`);
  }

  return answer;
}
// формування асоціацій за Прізвище І.П.
let assNpp = {};
function constructNppAss() {
  NPP.forEach((person) => {
    let idPerson = person["id_npp"];
    let assPerson =
      person["last_name"] +
      " " +
      person["first_name"][0] +
      "." +
      person["patronymic_name"][0] +
      ".";
    assNpp[idPerson] = assPerson;
  });
  console.log("Асоційваний:assNpp ", assNpp);
}
function insertData(name, item) {
  dataObj[name].push(item);
}

function editData(name, item) {
  // заміна даних при порівняння значень перших ключів

  for (let i = 0; i < dataObj[name].length; i++) {
    let person = dataObj[name][i];
    let firstKeyObj = Object.keys(person)[0];
    let firstKeyItem = Object.keys(item)[0];
    if (person[firstKeyObj] == item[firstKeyItem]) {
      dataObj[name][i] = item; // Замінюємо
      break; // Зупиняємо цикл, бо знайдено
    }
  }
}
function removeData(name, item) {
  const firstKeyItem = Object.keys(item)[0];
  let firstKeyObj = Object.keys(dataObj[name][0])[0];
  const index = dataObj[name].findIndex(
    obj => obj[firstKeyObj] == item[firstKeyItem]
  );

  if (index !== -1) {
    dataObj[name].splice(index, 1);
  }
}
