document.getElementById("mainStoryTitle").innerText = "Entertainment";

getData("https://firstpost.onrender.com/ENTERTAINMENT").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);