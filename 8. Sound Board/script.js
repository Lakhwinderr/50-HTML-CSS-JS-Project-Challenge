const sounds = ["eagle", "forest-bird", "hawk", "singing-birds"];

const stopAllsounds = () =>{
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText= sound;
    document.body.appendChild(btn);

    btn.addEventListener("click", () =>{
        stopAllsounds();
        document.getElementById(sound).play()
    })
})

const pause = document.createElement("button");
pause.classList.add("pause")
pause.innerText= "Stop"
document.body.appendChild(pause)
pause.addEventListener("click", stopAllsounds)