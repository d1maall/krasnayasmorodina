$(document).ready(function () {
    $(".slideshow").maximage({
        fillElement: '.left',
        backgroundSize: 'contain'
    });

    //console.log($(".right").width() + "x" + $(".right").height());

    $(".content").css("height", $(".right").height() - 34)
                .css("width", $(".right").width() - 34)
});