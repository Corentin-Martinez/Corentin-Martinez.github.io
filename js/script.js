function changeimage(refimage) {
    var image = document.getElementById(refimage);
    if (image.src.includes("renard")== true) {
        image.src ="Ressources/image/hibou.jpg";
    } else {
        image.src="Ressources/image/renard.jpg";
    }
}


