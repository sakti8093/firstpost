document.getElementById("mainStoryTitle").innerText = "World";

getData("https://firstpost.onrender.com/WORLD").then((res) => {
    append(res, document.querySelector(".main-content"));
});