$(document).ready(function() {
    $('#header-carousel').carousel({
        interval: 2000
      });

    $('#opinions-carousel').carousel({
        interval: 2000
    });

    $(".plan").each(function() {
        $(this).hover(function() {
            $(this).find("span").css({
                borderSize: "2px",
                borderStyle: "solid",
                borderColor: $(this).find("h4").css("color") 
            });
        }, function() {
            $(this).find("span").css("border-color", "#fff")
        });
    });

    //overlay loading
    $(window).load(function() {
        $(".sk-cube-grid").fadeOut(1000, function() {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(1000, function() {
                $(".overlay").remove();
            });
        });
    });
});


