// Унікальний ID для поточної вкладки
function initSession() {
  let tabId = sessionStorage.getItem("tabId");
  if (!tabId) {
    tabId = crypto.randomUUID();
    sessionStorage.setItem("tabId", tabId);
  }
  console.log("ID вкладки:", tabId);
  // збереження часу відкиття
  let browseWindow = JSON.parse(localStorage.getItem("browseWindow")) || [];
  // перевірка наяв=ності ключа сесії
  const flagKey = browseWindow.some((item) => item.tabId === tabId);
  if (!flagKey) {
    // додавання нових сесії - вкладки
    browseWindow.push({
      tabId,
      time: new Date().toISOString(),
      firstActive: true,
    });
  }
  console.log("Arr:", browseWindow);
  localStorage.setItem("browseWindow", JSON.stringify(browseWindow));
}

function setSessionActivate() {
  let tabId = sessionStorage.getItem("tabId");
  let browseWindow = JSON.parse(localStorage.getItem("browseWindow"));
  const item = browseWindow.find((item) => item.tabId === tabId);
  if (item) {
    item.firstActive = false;
  }
  localStorage.setItem("browseWindow", JSON.stringify(browseWindow));
  console.log("Зміна прапорця:", false);
}
function setSessionTime() {
  let tabId = sessionStorage.getItem("tabId");
  let browseWindow = JSON.parse(localStorage.getItem("browseWindow"));
  const item = browseWindow.find((item) => item.tabId === tabId);
  if (item) {
    item.time =  new Date().toISOString();
  }
  localStorage.setItem("browseWindow", JSON.stringify(browseWindow));
  console.log("Зміна часу:", !!item);
}
function getSessionActivate() {
  let tabId = sessionStorage.getItem("tabId");
  let browseWindow = JSON.parse(localStorage.getItem("browseWindow"));
  const item = browseWindow.find((item) => item.tabId === tabId);

  return  item.firstActive;
}

function getSessionTime() {
  let tabId = sessionStorage.getItem("tabId");
  let browseWindow = JSON.parse(localStorage.getItem("browseWindow"));
  const item = browseWindow.find((item) => item.tabId === tabId);

  return  item.time;
}
