function start(relevant) {
  construction_table(dataObj[relevant], relevant);
  let report = document.getElementById("active_table");
  report.textContent = `Активна таблиця: ${name_table[relevant]}`;
}

readUserAction();
//Старт з останньо збереженої вкладки
let aTab = localStorage.getItem("active_tab") || "npp";
addSelectTab(aTab);
start(aTab);

// додавання події visibilitychange для синхрогізації відкритих вікон в межах одного браузера
// один Браузер
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    let aTab = localStorage.getItem("active_tab");
    addSelectTab(aTab);
    // зміна першого перегляду
    let boool = getSessionActivate();
    console.log("Статут сесії", boool);
    if (boool) {
      readUserAction();

    } else {
      console.log("Ішні перегляди");
      let booolTime = getSessionTime();
      lastUserAction(booolTime);
    }
  // зміна статусу
    setSessionActivate();
  // зміна часу активації вкладки
    setSessionTime();
    start(aTab);
  }
});

// ініцалізації сесії та запис у localStorage
initSession();
// додавання події закриття вкладки
window.addEventListener("beforeunload", () => {
  let browseWindow = JSON.parse(localStorage.getItem("browseWindow") || "[]");
  let tabId = sessionStorage.getItem("tabId");
  browseWindow = browseWindow.filter((item) => item.tabId !== tabId);
  alert();
  localStorage.setItem("browseWindow", JSON.stringify(browseWindow));
});
