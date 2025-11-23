// Select the notice element
const notice = document.getElementById("notice");

// Highlight when mouse enters
notice.addEventListener("mouseover", function () {
    notice.style.backgroundColor = "yellow";
    notice.style.padding = "5px";
});

// Remove highlight when mouse leaves
notice.addEventListener("mouseout", function () {
    notice.style.backgroundColor = "";
    notice.style.padding = "";
});
