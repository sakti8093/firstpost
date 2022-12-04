document.getElementById("mainStoryTitle").innerText = "Tech";

getData("https://firstpost.onrender.com/TECH").then((res) => {
    append(res, document.querySelector(".main-content"));
});