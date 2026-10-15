function create_form(name) {
  console.log("Дані фунції create_form", name);
  let form_structure = `<form id ="${name}" name="${name}">`;
  let title = dataObj[name][0];
  // формування input

  Object.keys(title).forEach((key) => {
    form_structure += `
    <div class="mb-3">
    <label for="${key}" class="form-label">${key}</label>
    <input type="text" class="form-control" id="${key}" name="${key}">
    </div>`;
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
}
