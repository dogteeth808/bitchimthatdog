const disclaimerStuff = `
<div style="position: fixed; z-index: 10; width: 100vw; height: 100vh; pointer-events: all;">
    <div class="cautiontape" style="transform: translate(-50%, -50%) rotate(10deg); top: 48%; left: 50%;"></div>
    <div class="cautiontape" style="transform: translate(-50%, -50%) rotate(-26deg); top: 26%; left: 50%;"></div>
    <div class="cautiontape" style="transform: translate(-50%, -50%) rotate(-12deg); top: 69%; left: 50%;"></div>
    <div class="framey outerframe cautionDisclaimer">
        <span style="font-size: 7vh;"><b>HEY YOU!!!!</b></span>
        <span style="font-size: 1.9vh;"><br>
        You're about to enter my unfinished realm of whimsy...<br><br>
        This is a simple warning to say that a lot of links here might send you to random placeholder locations instead of what they promise. Most of the functionality lies within this home page and the music section!<br><br>
        This website is also not built for phones in the slightest. Mobile support will come eventually though!<br><br>
        Okay! Happy browsing!
        </span>
        <button onclick="disclaimerSwitch(\`off\`)" style="font-size: 3vh; padding: 1vh; color: white; background-color: black; border: 0; transform: rotate(-2deg); margin-top: 2vh;">I'm So Ready To Surf</button>
    </div>
</div>`

function disclaimerSwitch(status) {
    if (localStorage.getItem("disclaimerClicked") != "yes") {
        let element = document.getElementById("disclaimer");
        switch (status) {
            case "on":
                localStorage.setItem("disclaimerClicked", "no")
                element.innerHTML = disclaimerStuff; break;
            case "off":
                localStorage.setItem("disclaimerClicked", "yes")
                element.innerHTML = ``;
            }
        }
}

function indexOnload() {
    disclaimerSwitch("on");
    latestRelease();
    updatesCompileIndex();
}