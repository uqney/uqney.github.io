function displayPanoramas() {
    const panoramaList = document.getElementById("panorama-list");
    const panoramas = JSON.parse(localStorage.getItem('uploadedPanoramas')) || [];
    panoramas.forEach((panorama, index) => {
        const panoramaCard = document.createElement('div');
        panoramaCard.classList.add('panorama-element');
        const panoramaSrc = panorama.imageUrl;
        const panoramaWidth = panorama.width;
        const panoramaHeight = panorama.height;
        const targetWidth = window.innerWidth * 0.45; // Gewünschte Breite
        const targetHeight = (panoramaHeight / panoramaWidth) * targetWidth; // Höhe basierend auf Seitenverhältnis
        const timeStamp = panorama.timeStamp;
        panoramaCard.innerHTML = `
        <h3>Panorama ${index + 1}</h3>
        <img src="${panoramaSrc}" width="${targetWidth}" height="${targetHeight}">
        <p>${panoramaWidth}px * ${panoramaHeight}px</p>
        <p>Uploaded at: ${timeStamp}</p>
        `;
        panoramaList.appendChild(panoramaCard);
    });
}

document.addEventListener("DOMContentLoaded", displayPanoramas);

window.addEventListener("storage", function (event) {
    if (event.key === "uploadedImages") {
        displayPanoramas();
    }
});

// Lade die Bilder beim Start
document.addEventListener("DOMContentLoaded", displayPanoramas);

// Überwache Änderungen am localStorage
window.addEventListener("storage", function (event) {
    if (event.key === "uploadedImages") {
        displayPanoramas();
    }
});
