construction_table(NPP, "npp");

const name_table = {
  npp: "Склад кафедри",
  methodical: "Методичні розробки",
  development: "Підвищення кваліфікації",
  articles: "Наукові статті",
  thesis: "Тези конференцій",
};
let report = document.getElementById("active_table");
report.textContent = `Активна вкладка: ${name_table["npp"]}`;
