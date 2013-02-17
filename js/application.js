// Some general UI pack related JS

$(function () {
    // Custom selects
    $("select").dropkick();
});

$(document).ready(function() {
    // Init tooltips
    $("[data-toggle=tooltip]").tooltip("show");

    // Init tags input
    $("#tagsinput").tagsInput();

    // Init jQuery UI slider
    $("#slider").slider({
        min: 1,
        max: 5,
        value: 2,
        orientation: "horizontal",
        range: "min",
    });

    // JS input/textarea placeholder
    $("input, textarea").placeholder();

    var colors = ["#2980b9", "#3498db"];
    var index = 0;

    function rotateBG() {
        if (index > 1) {
            index = 0;
        }

        $(".logo").css("backgroundColor", colors[index]);
        index++;
    }
    window.setInterval(rotateBG, 5000);

});

