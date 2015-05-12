/**
 * Created by dmitry on 08.04.15.
 */

$(document).ready(function () {
    function setHeight() {
        $(".header").css("height", $(window).height());
    }

    setHeight();
    $(window).resize(function () {
        setHeight();
    });
});