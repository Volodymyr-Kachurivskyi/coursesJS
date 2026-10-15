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
  if (currentTable !== "npp") {
    answer.push(true, `Видалено рядок з таблиці ${currentTable}`);
  } else {
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
  }

  return answer;
}

let assNpp = {};
function constructNppAss() {
  NPP.forEach((person) => {
    let idPerson = person["id_author"];
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
