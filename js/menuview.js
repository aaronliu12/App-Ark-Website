$(window).on('resize scroll', function() {
    if($(window).scrollTop() > 650){
        $('.second-bar').css("background-color", "white");
        $('.second-bar').css("border-bottom", "solid rgba(0,0,0,.1) 5px");
        $('.links2').css("color", "black");
    }

    else{
        $('.second-bar').css("background-color", "rgba(0,0,0,0)");
        $('.links2').css("color", "white");
        $('.second-bar').css("border-bottom", "none");
    }
});

