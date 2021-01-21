
/*
// au clic sur un titre...
accordion.on('click', '.accordion-title', function() {
    console.log("clic detecté");
    accordion.find('.accordion-content').slideDown( "slow");
    console.log('test', accordion.find('.accordion-content'));
    // ...on lance l'affichage de l'élément, avec animation
});*/


$(document).ready(function () {
    $(".accordion").on("click", function () {
        console.log("clic detecté");
        console.log('test', $(this).find('.accordion-content'));
        $(this).find('.accordion-content').slideToggle( "slow");
    });
}); 