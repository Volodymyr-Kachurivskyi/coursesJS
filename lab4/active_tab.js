
const tabs = document.querySelectorAll(".tab");
report = document.getElementById("active_table");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    report.textContent = `Активна вкладка: ${name_table[this.id]}`;
    // Запис активної вкладки
    addSelectTab(this.id);

    construction_table(dataObj[this.id], this.id);
  });
});
