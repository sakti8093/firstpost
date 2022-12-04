document.getElementById("mainStoryTitle").innerText = "HEALTH NEWS";

getData("https://firstpost.onrender.com/HOME-PAGE").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);