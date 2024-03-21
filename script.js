let popup = document.getElementById("popup");
let popupIcon = document.getElementById("popupIcon");
let popupMessage = document.getElementById("popupMessage");

let showMessagePopup = (text, online) => {
    popupMessage.textContent = text;
    if (online) {
        popup.style.backgroundColor = "#98FB98"; // Set background color for online status
        popup.style.color = "#4F7942"; // Set text color for online status
        popupIcon.className = "uil uil-check-circle"; // Set icon class for online status (tick mark)
    } else {
        popup.style.backgroundColor = "#ffdde0"; // Set background color for offline status
        popup.style.color = "#D22B2B"; // Set text color for offline status
        popupIcon.className = "uil uil-times-circle"; // Set icon class for offline status
    }
    popup.classList.add('show'); // Show the popup
};

let hideMessagePopup = () => {
    popup.classList.remove('show'); // Hide the popup
};

if (window.navigator.onLine) {
    showMessagePopup("Internet Connection Available", true);
} else {
    showMessagePopup("No Internet Connection", false);
}

window.addEventListener("online", () => {
    showMessagePopup("Internet Connection Available", true);
});

window.addEventListener("offline", () => {
    showMessagePopup("No Internet Connection", false);
});

popup.addEventListener("click", hideMessagePopup); // Hide popup when clicked
