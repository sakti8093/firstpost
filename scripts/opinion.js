document.getElementById("mainStoryTitle").innerText = "Opinion";

getData("https://firstpost.onrender.com/OPINION").then((res) => {
    append(res, document.querySelector(".main-content"));
});