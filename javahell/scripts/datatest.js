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
  // const dateSplit = musicEntries[x].date.split("/");
  // let dateInt = dateSplit[3] + dateSplit[1] + dateSplit[2]
  
  // let depositDump = [
  //    {boolean:"false",id:"collabList",content:"",},
  //    {boolean:"false",id:"coverList",content:"",},
  //    {boolean:"false",id:"beatBattleList",content:"",},
  //    {boolean:"true",id:"allList",content:"",},]
      
  let depositDump = {
      "Collab": {id:"collabList", content:""},
      "Cover": {id:"coverList", content:""},
      "Beat Battle": {id:"beatBattleList", content:""},
      all: {id:"allList", content:""},
  }
 
  
  for (let x = 0; x < musicEntries.length; x++) {
    let entry = "";
    
    entry += musicEntries[x].title + "<br>" + musicEntries[x].type;
    
    if (musicEntries[x].type == "Collab" || musicEntries[x].type == "Cover") {
      entry += " (" + musicEntries[x].alias2 + ")";
    }
      
    entry += " // " + musicEntries[x].alias;
    
    if (musicEntries[x].tags != "") {
      entry += " // " + musicEntries[x].tags;
    }
    
    entry += "<br>" + musicEntries[x].date + "<br><br>";
    
    depositDump[musicEntries[x].type].content += entry;
    depositDump.all.content += entry;
    
  }
  
  //"type" is a VARIABLE it DOESNT MEAN ANYTHING
  for (let type in depositDump) {
    let element = document.getElementById(depositDump[type].id);
    if (element !== null) {
      element.innerHTML = depositDump[type].content;
    }
  }
  
  // for (let x = 0; x < depositDump.length; x++) {
  //   if (document.getElementById(depositDump[x].id) !== null) {
  //     document.getElementById(depositDump[x].id).innerHTML = depositDump[x].content;
  //   }
  // }
}

function musicEntryDateDescend() { 
  sortType = "dateDescending";
  musicEntrySort();
}

function musicEntrySort() {
  musicEntryCompile()
}






