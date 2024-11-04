const imgbox = document.querySelector(".imgbox");
const image = document.querySelector(".image");
const qrText = document.querySelector(".qrText");
const btn = document.querySelector("button");

btn.addEventListener("click", generateQRCode);
qrText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        generateQRCode();
    }
});

function generateQRCode() {
    if (qrText.value.trim() !== "") { 
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    } else {
        alert("Please enter text to generate a QR code.");
    }
}
