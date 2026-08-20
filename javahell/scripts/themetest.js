const themeActive = ["","","","","","","","",""]
var root = document.querySelector(":root")

const themeDogteeth = [
  "rgba(1,143,20,1)", // musicbg 
  "rgba(246,105,187,1)", // blogbg
  "rgba(243,217,46,1)", // morebg
  "rgba(253,38,38,1)", // heybg
  "rgba(154,138,235,1)", // spotlightbg
  "rgba(154,138,235,1)", // buttonsbg
  "rgba(243,217,46,1)", // updatesbg 
  "rgba(1,143,20,1)", // otherbg 
  "rgba(0,0,0,0.4)"]; // genericborder
  
const themeCarnelian = [
  // all bgs
    "#fd9226",
  // all borders
    "rgba(0,0,0,0.4)"];
    
const themeIce = [
  // all bgs
    "rgb(125,214,241)",
  // all borders
    "rgba(57,91,122,0.7)"];
    
const themeFruity = [
  // all bgs
    "linear-gradient(45deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)",
  // all borders
    "rgba(0,0,0,0.7)"];
  
function dogteethTheme() {
  for (let x = 0; x <= 8; x++) { 
    themeActive[x] = `${themeDogteeth[x]}`; 
  }
}
  
function carnelianTheme() {
  for (let x = 0; x <= 2; x++) { themeActive[x] = `${themeCarnelian[x]}`; } }
  
function iceTheme() {
  for (let x = 0; x <= 2; x++) { themeActive[x] = `${themeIce[x]}`; } }
  
function fruityTheme() {
  for (let x = 0; x <= 2; x++) { themeActive[x] = `${themeFruity[x]}`; } }
  
function themeChanger() {
  root.style.setProperty("--musicbg", `${themeActive[0]}`);
  root.style.setProperty("--blogbg", `${themeActive[1]}`);
  root.style.setProperty("--morebg", `${themeActive[2]}`);
  root.style.setProperty("--heybg", `${themeActive[3]}`);
  root.style.setProperty("--spotlightbg", `${themeActive[4]}`);
  root.style.setProperty("--leftbarbg", `${themeActive[5]}`);
  root.style.setProperty("--updatesbg", `${themeActive[6]}`);
  root.style.setProperty("--rightbarbg", `${themeActive[7]}`);
  root.style.setProperty("--genericborder", `${themeActive[8]}`);
}
  
function themeChangerSimple() {
  root.style.setProperty("--musicbg", `${themeActive[0]}`);
  root.style.setProperty("--blogbg", `${themeActive[0]}`);
  root.style.setProperty("--morebg", `${themeActive[0]}`);
  root.style.setProperty("--heybg", `${themeActive[0]}`);
  root.style.setProperty("--spotlightbg", `${themeActive[0]}`);
  root.style.setProperty("--leftbarbg", `${themeActive[0]}`);
  root.style.setProperty("--updatesbg", `${themeActive[0]}`);
  root.style.setProperty("--rightbarbg", `${themeActive[0]}`);
  root.style.setProperty("--genericborder", `${themeActive[1]}`);
}