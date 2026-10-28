function showModal(doAction) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  const table_active = document.querySelector("#report table");
  console.log("Таблиця", table_active.id);
  const table_con = document.getElementById("modal_content");
  const title = document.getElementById("modal_title");

  if (doAction == "insert") {
    title.innerHTML = "Введення нових даних до таблиці";
    document.getElementById("save").setAttribute("onclick", "save_data()");
    create_form(table_active.id);
  }
}
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
