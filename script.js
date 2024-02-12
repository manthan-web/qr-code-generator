const inputElement = document.querySelector(".input-element")
const generateQrBtn = document.querySelector('.generate-url')
// const urlPreview = document.querySelector('.preview-qr')



generateQrBtn.addEventListener('click', () => {
    let url = inputElement.value
    const qrcode = new QRCode(document.querySelector('.preview-qr'), {
        text: `${url}`,
        width: 128,
        height: 128,
        colorDark: '#000',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.H
    });

})