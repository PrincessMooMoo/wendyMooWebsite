function changeText() {
    let copyrightYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML=("Copyright&copy; " + copyrightYear + " Wendy Moo. All rights reserved.");
}

changeText();

function imageEnlarge(image) {
    document.getElementById(image).style.height='50%';
    document.getElementById(image).style.width='50%';
    document.getElementById(image).style.position='relative';
}

function imageReset() {
    document.getElementById('design').style.height ="auto";
    document.getElementById('design').style.width='auto';
    document.getElementById('design').style.position="relative";
}