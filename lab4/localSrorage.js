function addSelectTab(tab) {
  localStorage.setItem("active_tab", tab);
}
// додати запис про активність користувача: додавання запису, редагування, видалення

function addUserAction(table, action, item) {
  let arrAction = JSON.parse(localStorage.getItem("userAction") || "[]");
  let currentTime = new Date().toISOString();
  let elem = {
    table: table,
    action: action,
    item: item,
  };
  elem["time"] = currentTime;

  arrAction.push(elem);
  // Зберігаємо об'єкт як JSON-рядок
  localStorage.setItem("userAction", JSON.stringify(arrAction));
}


function lastUserAction(lastTime) {
  let arrAction = JSON.parse(localStorage.getItem("userAction") || "[]");
  let lastArrAction = arrAction.filter(item =>  new Date(item.time) > new Date(lastTime));
  console.log("Залишкові дії користувача - ",lastArrAction);
  for (let i = 0; i < lastArrAction.length; i++) {
    let elem = lastArrAction[i];

    // обробка подій
    switch (elem["action"]) {
      case "delete":
        removeData(elem["table"], elem["item"]);
        break;
      case "insert":
        insertData(elem["table"], elem["item"]);
        break;
      case "edit":
        editData(elem["table"],elem["item"]);
        break;
    }
  }
}

function readUserAction() {
  let arrAction = JSON.parse(localStorage.getItem("userAction") || "[]");

  for (let i = 0; i < arrAction.length; i++) {
    let elem = arrAction[i];

    // обробка подій
    switch (elem["action"]) {
      case "delete":
        removeData(elem["table"], elem["item"]);
        break;
      case "insert":
        insertData(elem["table"], elem["item"]);
        break;
      case "edit":
        editData(elem["table"],elem["item"]);
        break;
    }
  }
}
