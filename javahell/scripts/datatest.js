let sortType = ""
const musicEntries = [
{
  id:"1", img:"",
  type:"Collab", title:"i think my friend is an angel", alias:"dogteeth", alias2:"t4teeth",
  tags:"Ultrapop", date:"04/18/2026",
  sc:"", bc:"https://ultrapop.bandcamp.com/track/i-think-my-friend-is-an-angel",
  yt:"", lt:"",
},
{
  id:"2", img:"",
  type:"Cover", title:"educated horse", alias:"mynnteatwo", alias2:"100 gecs",
  tags:"Beat Battle", date:"03/01/2026",
  sc:"https://soundcloud.com/mynnteatwo/educatedhorse", bc:"",
  yt:"", lt:"",
},
{
  id:"3", img:"",
  type:"Beat Battle", title:"washing machine", alias:"mynntea", alias2:"",
  tags:"", date:"01/17/2026",
  sc:"https://soundcloud.com/mynntea/washing-machine", bc:"",
  yt:"", lt:"",
},
{
  id:"4", img:"",
  type:"Beat Battle", title:"washing machine", alias:"mynntea", alias2:"",
  tags:"", date:"01/17/2026",
  sc:"https://soundcloud.com/mynntea/washing-machine", bc:"",
  yt:"", lt:"",
},
]

function musicEntryCompile() {
  let entry = "";
  // const dateSplit = musicEntries[x].date.split("/");
  // let dateInt = dateSplit[3] + dateSplit[1] + dateSplit[2]
  
  for (let x = 0; x < musicEntries.length; x++) {
    entry += musicEntries[x].title + "<br>" + musicEntries[x].type;
    
    if (musicEntries[x].type == "Collab" || musicEntries[x].type == "Cover") {
      entry += " (" + musicEntries[x].alias2 + ")";
    }
      
    entry += " // " + musicEntries[x].alias;
    
    if (musicEntries[x].tags != "") {
      entry += " // " + musicEntries[x].tags;
    }
    
    entry += "<br>" + musicEntries[x].date + "<br><br>"
    
    }
  document.getElementById("entry").innerHTML = entry;
}

function musicEntryDateDescend() { 
  sortType = "dateDescending";
  musicEntrySort();
}

function musicEntrySort() {
  
  musicEntryCompile()
}




