window.onload = function () {
    $('body').flowtype({
        minFont : 12,
        maxFont : 18
    });

    document.body.className += " loaded";
    $(".profile-image-solid").css("opacity", "1");
    $(".profile-image-lines").css("opacity", ".1");

    new Vivus('my-svg', {
        duration: 4000
    });
}