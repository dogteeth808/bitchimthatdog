var root = document.querySelector(":root")

var musicbgValue = document.getElementsByTagName("--musicbg");
var blogbgValue = document.getElementsByTagName("--blogbg");
var morebgValue = document.getElementsByTagName("--morebg");
var heybgValue = document.getElementsByTagName("--heybg");
var spotlightbgValue = document.getElementsByTagName("--spotlightbg");
var buttonsbgValue = document.getElementsByTagName("--buttonsbg");
var updatesbgValue = document.getElementsByTagName("--updatesbg");
var otherbgValue = document.getElementsByTagName("--otherbg");
var genericborderValue = document.getElementsByTagName("--genericborder")

if(!localStorage.getItem('--musicbg')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("--musicbg", document.getElementsByTagName("--musicbg").value);
  localStorage.setItem("--blogbg", document.getElementsByTagName("--blogbg").value);
  localStorage.setItem("--morebg", document.getElementsByTagName("--morebg").value);
  localStorage.setItem("--heybg", document.getElementsByTagName("--heybg").value);
  localStorage.setItem("--spotlightbg", document.getElementsByTagName("--spotlightbg").value);
  localStorage.setItem("--buttonsbg", document.getElementsByTagName("--buttonsbg").value);
  localStorage.setItem("--updatesbg", document.getElementsByTagName("--updatesbg").value);
  localStorage.setItem("--otherbg", document.getElementsByTagName("--otherbg").value);
  localStorage.setItem("--genericborder", document.getElementsByTagName("--genericborder").value);

  setStyles();
}

function setStyles() {
  var musicbgCurrent = localStorage.getItem('--musicbg');
  document.getElementsByTagName('--musicbg').value = musicbgCurrent;
  root.style.setProperty("--musicbg", `${musicbgCurrent}`);
  
  var blogbgCurrent = localStorage.getItem('--blogbg');
  document.getElementsByTagName('--blogbg').value = blogbgCurrent;
  root.style.setProperty("--blogbg", `${blogbgCurrent}`);
  
  var morebgCurrent = localStorage.getItem('--morebg');
  document.getElementsByTagName('--morebg').value = morebgCurrent;
  root.style.setProperty("--morebg", `${morebgCurrent}`);
  
  var heybgCurrent = localStorage.getItem('--heybg');
  document.getElementsByTagName('--heybg').value = heybgCurrent;
  root.style.setProperty("--heybg", `${heybgCurrent}`);
  
  var spotlightbgCurrent = localStorage.getItem('--spotlightbg');
  document.getElementsByTagName('--spotlightbg').value = spotlightbgCurrent;
  root.style.setProperty("--spotlightbg", `${spotlightbgCurrent}`);
  
  var buttonsbgCurrent = localStorage.getItem('--buttonsbg');
  document.getElementsByTagName('--buttonsbg').value = buttonsbgCurrent;
  root.style.setProperty("--buttonsbg", `${buttonsbgCurrent}`);
  
  var updatesbgCurrent = localStorage.getItem('--updatesbg');
  document.getElementsByTagName('--updatesbg').value = updatesbgCurrent;
  root.style.setProperty("--updatesbg", `${updatesbgCurrent}`);
  
  var otherbgCurrent = localStorage.getItem('--otherbg');
  document.getElementsByTagName('--otherbg').value = otherbgCurrent;
  root.style.setProperty("--otherbg", `${otherbgCurrent}`);
  
  var genericborderCurrent = localStorage.getItem('--genericborder');
  document.getElementsByTagName('--genericborder').value = genericborderCurrent;
  root.style.setProperty("--genericborder", `${genericborderCurrent}`);
}
  
musicbgValue.onchange = populateStorage;
blogbgValue.onchange = populateStorage;
morebgValue.onchange = populateStorage;
heybgValue.onchange = populateStorage;
spotlightbgValue.onchange = populateStorage;
buttonsbgValue.onchange = populateStorage;
updatesbgValue.onchange = populateStorage;
otherbgValue.onchange = populateStorage;
genericborderValue.onchange = populateStorage;
