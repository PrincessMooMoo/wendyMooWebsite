function changeText() {
    let copyrightYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML=("Copyright&copy; " + copyrightYear + " Wendy Moo. All rights reserved.");
}

changeText();