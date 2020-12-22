function changeimage() {
    console.log("change image")
    var image = document.getElementById('imagerenard');
    if (image.src.includes("renard")== true) {
        image.src ="Ressources/image/hibou.jpg";
    } else {
        image.src="Ressources/image/renard.jpg";
    }
}