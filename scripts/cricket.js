document.getElementById("mainStoryTitle").innerText = "Cricket";

getData("https://firstpost.onrender.com/CRICKET").then((res) => {
    append(res, document.querySelector(".main-content"));
});