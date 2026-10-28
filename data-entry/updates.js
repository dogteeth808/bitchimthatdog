const updateEntries = [
{date:"2026 07 24", text:`Added the Updates section! Wowie! How sick is that.`},
{date:"2026 07 25", text:`Played around with the category boxes. This shit is hard! But there's some neat stuff anyway`},
{date:"2026 07 26", text:`Took my first real dive into JavaScript today. It was hard and it hurt my head but I have a concept for a "themes" framework! <a href="/javahell/javahell">(see here)</a> Should not be too hard to implement into the homepage.` },
{date:"2026 07 27", text:`Learned about generating html code from an array of objects! Primitive version of the eventual "music database" has been created.` },
{date:"2026 07 28", text:`Decided to make this updates box into an array of objects as well! Hello from updates.js!` },
{date:"2026 07 30", text:`Added the themes to the main page! Look over there! ->` },
{date:"2026 08 06", text:`Big one today! Over the past couple days I've compiled a fun image collage for the "about" section, and now it's actually on the website! Yippee! So many PNGs oh my great gravy.` },
{date:"2026 08 07", text:`Added the other titles as well as the background to the test draft.` },
{date:"2026 08 18", text:`Added the "section icons" to the "& More!" section! It's been a hassle designing a shape that I think will work, but this current interation seems workable with maybe a lil background asset :3` },
{date:"2026 08 19", text:`Followed  <a href="https://www.youtube.com/watch?v=p1QU3kLFPdg">this lovely tutorial</a> to get this moved to github pages on my custom domain!!! exciting developments` },  
{date:"2026 08 24", text:`HUGE one today!!! A rudimentary version of the music section is online. I wrote some JavaScript to turn a list of data into a list of clickable song entries! And I can change the type of list it generates in no time at all! Go me!!!` },
{date:"2026 09 15", text:`Category buttons on music page work properly! The "latest release" section on this page works too! Basically all of the music page infrastructure shit is done. All design from this point on! Should be able to reuse some of that for the blog too, which is also exciting. Yippee!` },
{date:"2026 09 21", text:`Buttons are now not just me a billion times. A lot more units are based on VH. New "keyboard" images beside Music and Blog on the index, and some experimental texturing on the music page!` },
{date:"2026 10 04", text:`Happy October! I now have all my main links on here, a "Listen To" section for the song i've been looping most recently, changed how the buttons work, and added a disclaimer that remembers that you already clicked it!` },
{date:"2026 10 13", text:`"Art" button now goes to a rudimentary proof of concept. Click on the painting to go to the old site's art page!` },
];
const listenToEntries = [
  { link:`https://soundcloud.com/4kcarpet/chance-1`, image:`https://i1.sndcdn.com/artworks-IKCeGJgqkQ0Abrac-m8zc9A-t500x500.jpg`,
    date:`2026 10 27`, alias: `passengerprincess`, title:`CHANCE` },
  
  { link:`https://soundcloud.com/flatroomvr/kill-your-competitor`, image:`https://i1.sndcdn.com/artworks-fjipwpOy4kR7nZRY-AW2WRQ-t500x500.jpg`,
    date:`2026 10 22`, alias: `flatroom !!`, title:`KILL YOUR COMPETITOR` },
  
  { link:`https://soundcloud.com/chances-3/just-dance-333`, image:`https://i1.sndcdn.com/artworks-dzhyBy7Sno7SYZuB-CMANhw-t500x500.png`,
    date:`2026 10 21`, alias: `chance`, title:`just dance <3` },
  
  { link:`https://soundcloud.com/sugarpit/29af7602-2ecf-4bac-8347-caf933775445`, image:`https://i1.sndcdn.com/artworks-zeX3vqTBIDSTnLPg-zoMNcQ-t500x500.png`,
    date:`2026 10 17`, alias: `Sugar Pit`, title:`MY MORNING ROUTINE` },
  
  { link:`https://soundcloud.com/petalsupply/anyway-heres-1`, image:`https://i1.sndcdn.com/artworks-hLbZFhaConjks4fU-fNLPOQ-t500x500.jpg`,
    date:`2026 10 13`, alias: `Petal Supply, umru, Himera, trndytrndy`, title:`1` },
  
  { link:`https://soundcloud.com/frostchildren/2-love`, image:`https://i1.sndcdn.com/artworks-SowYo07hKLZo-0-t500x500.jpg`,
    date:`2026 10 09`, alias: `Frost Children`, title:`2 LØVE` },
  
  { link:`https://soundcloud.com/foodhousefoodhouse/foresight`, image:`https://i1.sndcdn.com/artworks-iXWl1LPYFjGG-0-t500x500.jpg`,
    date:`2026 10 07`, alias: `food house`, title:`foresight` },
  
  { link:`https://www.youtube.com/watch?v=mVKIva2KddY`, image:`assets/squarecovers/aaron_neilcic.jpg`,
    date:`2026 10 06`, alias: `Neil Cicierega`, title:`Aaron` },
  
  { link:`https://soundcloud.com/sparklecore/therian-saint-jude`, image:`https://i1.sndcdn.com/artworks-rJAXVGSm5OAVAByr-patFQw-t500x500.jpg`,
    date:`2026 10 04`, alias: `sixwing, gupi`, title:`THERIAN SAINT JUDE` },
  
  { link:`https://soundcloud.com/lipcritic/jackpot`, image:`https://i1.sndcdn.com/artworks-Zht7B4MdHyrt-0-t500x500.jpg`,
    date:`2026 10 03`, alias: `Lip Critic`, title:`Jackpot` },
];

function updateCompileIndex() {
  let update = "";
  let dateSplit = "";
  let dateFormatted = "";
  
  for (let x = updateEntries.length - 1; x >= 0; x--) {
    dateSplit = updateEntries[x].date.split(" ");
    dateFormatted = dateSplit[1] + "/" + dateSplit[2] + "/" + dateSplit[0]
    
    update += `<div class="framey update">` + 
    `<span class="updateTimestamp"> ` + dateFormatted + `</span>` +
    `<span class="updateText">`+ updateEntries[x].text + `</span>` + `</div>`;
  }
  document.getElementById("updatesBox").innerHTML = update;
}

function listenToLatest() {
  document.getElementById("listenToImage").style.backgroundImage = `url(` + listenToEntries[0].image; + `)`;
  document.getElementById("listenToTitle").innerHTML = listenToEntries[0].title;
  document.getElementById("listenToAlias").innerHTML = listenToEntries[0].alias;
  document.getElementById("listenToLink").href = listenToEntries[0].link;
}