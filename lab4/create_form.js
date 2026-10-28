function create_form(name) {
  console.log("Дані фунції create_form", name);
  console.log("dataListObj", dataListObj);
  let form_structure = `<form id ="${name}" name="${name}">`;
  let title = dataObj[name][0];
  let dataListColumn = dataListObj[name];
  console.log("поля для datalist", dataListColumn);
  // формування input

  Object.keys(title).forEach((key) => {
    if (dataListColumn.includes(key)) {
      form_structure += '<div class="mb-3">';
      form_structure += `<label for="${key}" class="form-label"><strong>${key}</strong></label>
      <input class="form-control" list="${key}+${name}" id="${key}" name="${key}" />
      <datalist id="${key}+${name}">`;

      form_structure += selectOption(name, key);

      form_structure += "</datalist></div>";
    } else {
      form_structure += `
        <div class="mb-3">
        <label for="${key}" class="form-label">${key}</label>
        <input type="text" class="form-control" id="${key}" name="${key}">
        </div>`;
    }
  });
  form_structure += "</form>";
  const content = document.getElementById("modal_content");
  content.innerHTML = form_structure;
}

function edit_form(name, rowId) {
  console.log("edit_form ID таблиці:", name);
  console.log("edit_form Редагуємо рядок з ID:", rowId);
  // 1. Знаходимо сам рядок (tr) всередині конкретної таблиці
  const row = document.getElementById(rowId);
  const cells = Array.from(row.querySelectorAll("td"));
  const rowData = cells.map((cell) => cell.textContent.trim());
  console.log("edit_form rowData: ", rowData);

  let form_structure = `<form id ="${name}" name="${name}">`;
  let title = dataObj[name][0];
  // формування input
  let i = 0;
  Object.keys(title).forEach((key) => {
    form_structure += `
    <div class="mb-3">
    <label for="${key}" class="form-label">${key}</label>
    <input type="text" class="form-control" id="${key}" name="${key}" value="${rowData[i]}">
    </div>`;
    i++;
  });
  form_structure += "</form>";
  const content = document.getElementById("modal_content");
  content.innerHTML = form_structure;

  // заборона редагування первиного ключа
  let item = document.getElementById(banEdit[name]);
  console.log("item ".item);
  item.disabled = "true";
}

function selectOption(Obj, key) {
  let textOption = "";
  let arrOption = [];
  let NameObj = dataObj[Obj];

  console.log("Переді дані: ", Obj, key);
  // дані із зв'язаних таблиць
  // id_npp для DEVELOPMET брати з NPP
  if (Obj === "development" && key === "id_npp") {
    NameObj = NPP;
  }
  // id_type для METHODICAL брати з FERMETHOD
  if (Obj === "methodical" && key === "id_type") {
    NameObj = REFMETHOD;
  }

  // формування унікальних значень
  NameObj.forEach((person) => {
    if (!arrOption.includes(person[key])) {
      arrOption.push(person[key]);
    }
  });
  // формування опцій
  for (const item of arrOption) {
    textOption += `<option value="${item}"></option>`;
  }

  return textOption;
}
