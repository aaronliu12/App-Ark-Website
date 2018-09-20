function rolebutton1(){
    if(document.getElementById("role-box1").style.display != "block"){
    document.getElementById("role-box1").style.display = "block";
    document.getElementById("role-box2").style.display = "none";
    document.getElementById("role-box3").style.display = "none";
    document.getElementById("role-box4").style.display = "none";
    }
    else{
        document.getElementById("role-box1").style.display = "none";
    }
    
}


function rolebutton2(){
    if(document.getElementById("role-box2").style.display != "block"){
    document.getElementById("role-box2").style.display = "block";
    document.getElementById("role-box1").style.display = "none";
    document.getElementById("role-box3").style.display = "none";
    document.getElementById("role-box4").style.display = "none";
    }
    else{
        document.getElementById("role-box2").style.display = "none";
    }
    
}

function rolebutton3(){
    if(document.getElementById("role-box3").style.display != "block"){
    document.getElementById("role-box3").style.display = "block";
    document.getElementById("role-box1").style.display = "none";
    document.getElementById("role-box2").style.display = "none";
    document.getElementById("role-box4").style.display = "none";
    }
    else{
        document.getElementById("role-box3").style.display = "none";
    }
    
}

function rolebutton4(){
    if(document.getElementById("role-box4").style.display != "block"){
    document.getElementById("role-box4").style.display = "block";
    document.getElementById("role-box1").style.display = "none";
    document.getElementById("role-box3").style.display = "none";
    document.getElementById("role-box2").style.display = "none";
    }
    else{
        document.getElementById("role-box4").style.display = "none";
    }
}

function team(){
    window.location.href = "services/services.html";
    $("#service-section").css("display", "none");
}

$( "#role-button1" ).hover(
  function() {
    $( this ).find( $("#strategist" ).css("content", "url('./assets/role%20pics/Strategist.png')") );
  }, function() {
    $( this ).find( $("#strategist" ).css("content", "url('./assets/role%20pics/Strategist(1).png')") );
  }
);

$( "#role-button2" ).hover(
  function() {
    $( this ).find( $("#assistant-strategist" ).css("content", "url('./assets/role%20pics/Assistant Strategist(1).png')") );
  }, function() {
    $( this ).find( $("#assistant-strategist" ).css("content", "url('./assets/role%20pics/Assistant Strategist.png')") );
  }
);

$( "#role-button3" ).hover(
  function() {
    $( this ).find( $("#EC" ).css("content", "url('./assets/role%20pics/Essay Consultant(1).png')") );
  }, function() {
    $( this ).find( $("#EC" ).css("content", "url('./assets/role%20pics/Essay Consultant.png')") );
  }
);

$( "#role-button4" ).hover(
  function() {
    $( this ).find( $("#AC" ).css("content", "url('./assets/role%20pics/Application Consultant(1).png')") );
  }, function() {
    $( this ).find( $("#AC" ).css("content", "url('./assets/role%20pics/Application Consultant.png')") );
  }
);

/* Inspiration for this and other hover effects - https://codepen.io/shshaw/pen/PQbQgE */
/* Check out SplittingJS -
https://splitting.js.org */



Splitting({
	target: "[data-rows], [data-columns], [data-image]",
	by: "cells",
	image: true
});

