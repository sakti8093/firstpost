document.getElementById("mainStoryTitle").innerText = "Business";

getData("https://firstpost.onrender.com/INDIA").then((res) => {
    append(res, document.querySelector(".main-content"));
});