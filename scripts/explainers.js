document.getElementById("mainStoryTitle").innerText = "Explainer";

getData("https://firstpost.onrender.com/EXPLAINERS").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);