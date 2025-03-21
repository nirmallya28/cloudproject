// script.js
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const captureBtn = document.getElementById("capture");
const scannedDocuments = document.getElementById("documents-list");

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => console.error("Camera access denied", err));

captureBtn.addEventListener("click", () => {
    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const imgDataUrl = canvas.toDataURL("image/png");
    const imgElement = document.createElement("img");
    imgElement.src = imgDataUrl;
    scannedDocuments.appendChild(imgElement);
});