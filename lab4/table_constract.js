function construction_table(data, name, block = "report") {
  let table_structure = `<table id ="${name}" class="table table-striped">`;
  let title = data[0];
  // формування шапки таблиці
  let table_head = `<thead><tr>`;
  Object.keys(title).forEach((key) => {
    table_head += `<th> ${aliasTitle[name][key]} </th>`;
  });
  table_head += "<th>Активні дії</th>";
  table_head += `</tr></thead>`;
  table_structure += table_head;

  // формування тіла таблиці
  let table_body = ``;
  data.forEach((person) => {
    let person_row = `<tr id="${person[Object.keys(person)[0]]}">`;

    Object.values(person).forEach((value) => {
      person_row += `<td> ${value} </td>`;
    });
    person_row += `<td><button class="btn" onclick="edit_row()" title="Редагувати запис"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="btn" onclick="delete_row()" title="Видалити рядок"><i class="fa-solid fa-trash-can"></i></button></td>`;
    person_row += `</tr>`;
    table_body += person_row;
  });
  table_structure += table_body + "</table>";

  const mytable = document.getElementById(block);
  mytable.innerHTML = table_structure;
}
