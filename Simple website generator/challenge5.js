
let i = 1;
function createCard(Title, cName, Views, monthSOld, Duration, Thumbnail) {

    let card = document.createElement("div");
    card.className = "card";
    document.querySelector(".container").append(card);

    let sno = document.createElement("div");
    sno.className = "sno";
    card.append(sno);


    let p = document.createElement("p");

    sno.append(p);

    let thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail";
    card.append(thumbnail);

    let image = document.createElement("div");
    image.className = "image";
    thumbnail.append(image);

    let duration = document.createElement("div");
    duration.className = "duration";
    thumbnail.append(duration);

    let discription = document.createElement("div");
    discription.className = "discription";
    card.append(discription);

    let title = document.createElement("div");
    title.className = "title";
    discription.append(title);

    let dis = document.createElement("div");
    dis.className = "dis";
    discription.append(dis);

    let chname = document.createElement("div");
    chname.className = "chname";
    dis.append(chname);

    let dot = document.createElement("div");
    dot.innerHTML = "•"
    dis.append(dot);

    let views = document.createElement("div");
    views.className = "views";
    dis.append(views);

    let dot2 = document.createElement("div");
    dot2.innerHTML = "•"
    dis.append(dot2);

    let monthsOld = document.createElement("div");
    monthsOld.className = "monthsOld";
    dis.append(monthsOld);

    let box = document.createElement("div");
    box.className = "box";
    card.append(box);

    box.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
     viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"
     style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
    <path
        d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
    </path>
</svg>`;



    p.innerHTML = i;
    title.innerHTML = Title
    chname.innerHTML = cName
    if (Views<1000) {
        views.innerHTML = Views  
    }
    else{
        views.innerHTML = Math.floor(Views / 1000) + "k"
    }
    monthsOld.innerHTML = monthSOld + "months ago"
    duration.innerHTML = Duration
    image.innerHTML = `<img  src="${Thumbnail}">`
    i++
}



createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("new gaming laptop with 4050 graphics card", "CodeWithHarry", 960000, 2, "11:22", "https://i.ytimg.com/vi/NkWp6LbSxiQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMf77lkefYmmwJv0JXNgjrmulDnA")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/JCXrMhHJ6NY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdzPWnDKhfs39wHMFfNk-_rvGJzw")