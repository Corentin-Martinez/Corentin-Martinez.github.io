function changeimage() {
    console.log("change image")
    var image = document.getElementById('imagerenard');
    if (image.src.includes("renard")== true) {
        image.src ="image/hibou.jpg";
    } else {
        image.src="image/renard.jpg";
    }
}