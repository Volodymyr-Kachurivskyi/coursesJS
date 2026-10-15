function save_data() {
  let item = {};
  const id_form = document.querySelector("#modal form").id;
  const form_inputs = document.querySelectorAll("#" + id_form + " input");
  form_inputs.forEach((input) => {
    item[input.id] = input.value;
  });
  console.log("Новий обєкт", item);
  dataObj[id_form].push(item);

  closeModal();
  showPopap("Нові дані записано та додано у кінець таблиці!");
  construction_table(dataObj[id_form], id_form, (block = "report"));
}
function save_edit_data(name, idRow) {
  // Ідентифікація рядка
  let item = {};
  const id_form = document.querySelector("#modal form").id;
  const form_inputs = document.querySelectorAll("#" + id_form + " input");
  form_inputs.forEach((input) => {
    item[input.id] = input.value;
  });
  console.log("Обект Запис редагованих даних для рядка ", item);
  // заміна даних пр порівняння значень перших ключів
  const firstKeyItem = Object.keys(item)[0];
  for (let i = 0; i < dataObj[name].length; i++) {
    let person = dataObj[name][i];
    let firstKeyObj = Object.keys(person)[0];
    if (person[firstKeyObj] == idRow) {
      dataObj[name][i] = item; // Замінюємо
      break; // Зупиняємо цикл, бо знайдено
    }
  }
  closeModal();
  showPopap("Внесені зміни записано!");
  construction_table(dataObj[name], name);
}
