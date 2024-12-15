document.title = "Spotify";
let currentSong = new Audio();
let currfolder;
let songs;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return String(minutes).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
}

async function getSongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:5000/${folder}`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }
    return songs;
}

const playMusic = (track) => {
    currentSong.src = `/${currfolder}/` + track;
    currentSong.load();

    currentSong.addEventListener("canplay", function onReady() {
        currentSong.play();
        play.src = "pause.svg";
        document.querySelector(".sname").innerHTML = track;
        currentSong.removeEventListener("canplay", onReady);
    });
};

async function DisplayAlbum() {
    let a = await fetch('http://127.0.0.1:5000/songs/');
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let playlistcard = document.querySelector(".playlistcard");
    playlistcard.innerHTML = ""; // Clear previous content

    for (let e of anchors) {
        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0];
            let metadata = await fetch(`http://127.0.0.1:5000/songs/${folder}/info.json`);
            let response = await metadata.json();

            playlistcard.innerHTML += `
                <div data-folder="${folder}" class="card">
                    <div class="playlogo">
                        <img src="/songs/${folder}/cover.jpg" alt="">
                    </div>
                    <h2>${response.title}</h2>
                    <p>${response.description}</p>
                </div>`;
        }
    }

    // Add event listeners to dynamically created cards
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", async () => {
            document.querySelector(".select-a-song").style.display = "none"; // Hide .select-a-song
            let folder = card.dataset.folder;
            songs = await getSongs(`songs/${folder}`);
            console.log("Songs:", songs);
            
            let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0];
            songUL.innerHTML = "";

            for (const song of songs) {
                songUL.innerHTML += `
                    <li>
                        <div class="flex gap align">
                            <svg class="invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#000000" fill="none">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M10 15.5C10 16.3284 9.32843 17 8.5 17C7.67157 17 7 16.3284 7 15.5C7 14.6716 7.67157 14 8.5 14C9.32843 14 10 14.6716 10 15.5ZM10 15.5V11C10 10.1062 10 9.65932 10.2262 9.38299C10.4524 9.10667 10.9638 9.00361 11.9865 8.7975C13.8531 8.42135 15.3586 7.59867 16 7V13.5M16 13.75C16 14.4404 15.4404 15 14.75 15C14.0596 15 13.5 14.4404 13.5 13.75C13.5 13.0596 14.0596 12.5 14.75 12.5C15.4404 12.5 16 13.0596 16 13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="song-info font-weight-400">
                                <div class="song-name white pad-b5">${song.replaceAll("%20", " ")}</div>
                                <div class="song-artist">Abi</div>
                            </div>
                        </div>
                        <div class="flex align">
                            <svg class="invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" color="#000000" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                                <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </li>`;
            }

            Array.from(document.querySelectorAll(".song-list li")).forEach((e) => {
                e.addEventListener("click", () => {
                    console.log(e.querySelector(".song-info .song-name").innerText);
                    playMusic(e.querySelector(".song-info .song-name").innerText);
                });
            });
        });
    });
}

async function main() {
    songs = await getSongs("songs/ncs");
    DisplayAlbum();
    console.log(songs);
    let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML += `<li>...</li>`; // Original song list logic
    }
    // More logic here...
}

play.addEventListener("click", () => {
    if (currentSong.paused) {
        currentSong.play()
        play.src = "pause.svg"
    }
    else {
        currentSong.pause()
        play.src = "play.svg"
    }
})

currentSong.addEventListener("timeupdate", () => {

    document.querySelector(".time").innerHTML = `${formatTime(currentSong.
        currentTime)}/${formatTime(currentSong.duration)}`
    document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    document.querySelector(".seekbar2").style.width = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    
})

document.querySelector(".song-timeline").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    document.querySelector(".seekbar2").style.width = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent) / 100
})

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = 0;
})
document.querySelector(".hamburgerL").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
})

document.querySelector(".controls .next").addEventListener("click", () => {
    console.log("Next clicked");


    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);

    if ((index + 1) < songs.length) {
        playMusic(songs[index + 1]);
    } else {
        playMusic(songs[0]);
    }
});

document.querySelector(".controls .previous").addEventListener("click", () => {
    console.log("previous clicked")

    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    if ((index - 1) >= 0) {
        playMusic(songs[index - 1])

    }
    else {
        playMusic(songs[songs.length - 1])
    }
});


main();
