function playNote(note) {
    const player = document.createElement("AUDIO");
    player.setAttribute("src", "sound/" + note + ".mp3");
    console.log("Played: " + player.src.toString());
    player.play();
}

document.addEventListener("keydown", (key) => {
        document.getElementById(key.code).click();
        if (document.getElementById(key.code).getAttribute("class") === "key white") {
            document.getElementById(key.code).style.background = "#cdcdcd"
        } else if (document.getElementById(key.code).getAttribute("class") === "key black") {
            document.getElementById(key.code).style.background = "#4f4f4f"
        }
    }
)

document.addEventListener("keyup", (key) => {
        if (document.getElementById(key.code).getAttribute("class") === "key white") {
            document.getElementById(key.code).style.background = "#fff"
        } else if (document.getElementById(key.code).getAttribute("class") === "key black") {
            document.getElementById(key.code).style.background = "#000"
        }
    }
)