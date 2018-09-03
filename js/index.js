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

Splitting({
	target: "[data-rows], [data-columns], [data-image]",
	by: "cells",
	image: true
});

/* Inspiration for this and other hover effects - https://codepen.io/shshaw/pen/PQbQgE */
/* Check out SplittingJS -
https://splitting.js.org */