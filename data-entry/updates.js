const updateEntries = [
{date:"2026 07 24", text:`Added the Updates section! Wowie! How sick is that.`},
{date:"2026 07 25", text:`Played around with the category boxes. This shit is hard! But there's some neat stuff anyway`},
{date:"2026 07 26", text:`Took my first real dive into JavaScript today. It was hard and it hurt my head but I have a concept for a "themes" framework! <a href="/javahell/javahell" target="_blank">(see here)</a> Should not be too hard to implement into the homepage.` },
{date:"2026 07 27", text:`Learned about generating html code from an array of objects! Primitive version of the eventual "music database" has been created.` },
{date:"2026 07 28", text:`Decided to make this updates box into an array of objects as well! Hello from updates.js!` },
{date:"2026 07 30", text:`Added the themes to the main page! Look over there! ->` },
{date:"2026 08 06", text:`Big one today! Over the past couple days I've compiled a fun image collage for the "about" section, and now it's actually on the website! Yippee! So many PNGs oh my great gravy.` },
{date:"2026 08 07", text:`Added the other titles as well as the background to the test draft.` },
{date:"2026 08 18", text:`Added the "section icons" to the "& More!" section! It's been a hassle designing a shape that I think will work, but this current interation seems workable with maybe a lil background asset :3` },
{date:"2026 08 19", text:`Followed  <a href="https://www.youtube.com/watch?v=p1QU3kLFPdg" target="_blank">this lovely tutorial</a> to get this moved to github pages on my custom domain!!! exciting developments` },  
]

function updatesCompileIndex() {
  let update = "";
  let dateSplit = "";
  let dateFormatted = "";
  
  for (let x = updateEntries.length - 1; x >= 0; x--) {
    dateSplit = updateEntries[x].date.split(" ");
    dateFormatted = dateSplit[1] + "/" + dateSplit[2] + "/" + dateSplit[0]
    
    update += `<div class="framey update">` + 
    `<span class="updateTimestamp"> ` + dateFormatted + `</span>` +
    `<span>`+ updateEntries[x].text + `</span>` + `</div>`;
  }
  document.getElementById("updatesBox").innerHTML = update;
}
