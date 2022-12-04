document.getElementById("mainStoryTitle").innerText = "Arts and Culture";

getData("https://firstpost.onrender.com/INDIA").then((res) => {
    append(res, document.querySelector(".main-content"));
});