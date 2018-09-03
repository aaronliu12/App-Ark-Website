$(window).on('resize scroll', function() {
    if($(window).scrollTop() > 650){
        $('.second-bar').css("background-image", "none");
        $('.second-bar').css("background-color", "white");
        $('.second-bar').css("border-bottom", "solid rgba(0,0,0,.1) 5px");
        $('.links2').css("color", "black");

        
    }

    else{
        $('.second-bar').css("background-color", "rgba(0,0,0,0)");
        $('.links2').css("color", "white");
        $('.second-bar').css("border-bottom", "none");
        $('.second-bar').css("background", "linear-gradient(0deg, rgba(0,0,0,0.00) 0%, #000000 100%)");
    }
});


$(function(){
    $(".overlay").hover(function(){
      $(this).find(".see-more").fadeIn();
        $(this).find(".resource-subheading").fadeIn();
    }
                    ,function(){
                        $(this).find(".see-more").fadeOut();
                        $(this).find(".resource-subheading").fadeOut();
                    }
                   );        
})



$(function(){
    $(".role-button").hover(function(){
      $(this).find(".role-description").css("color", "#B1030E");
    }
                    ,function(){
                        $(this).find(".role-description").css("color", "black");
                    }
                   );        
})


$(function(){
    $("#role-button1").click(function(){
        console.log("hey");
      $(this).find("#role-box1").css("display", "block");
    }
                    ,function(){
                        $(this).find("#role-box1").css("display", "none");
                    }
                   );        
})