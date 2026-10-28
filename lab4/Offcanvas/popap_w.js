function closePopap() {
  document.getElementById("popap").style.top = "-200px";
}

function showPopap(textBody) {
  document.getElementById("popap").style.top = "10px";
  document.getElementById("popapBody").innerHTML = textBody;
  setTimeout(() => {
    document.getElementById("popap").style.top = "-200px";
  }, 4000);
}
