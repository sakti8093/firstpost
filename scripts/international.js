document.getElementById("mainStoryTitle").innerText = "International";

getData("https://firstpost.onrender.com/INDIA").then((res) => {
    append(res, document.querySelector(".main-content"));
});