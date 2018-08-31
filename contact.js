function accordion(item){
    
    if(item.innerHTML == "上海办公室"){
        if(document.getElementById("panel1").style.display != "block"){
            document.getElementById("panel1").style.display = "block";
            document.getElementById("panel2").style.display = "none";
            document.getElementById("panel3").style.display = "none";
        }
        
    }
    if(item.innerHTML == "苏州办公室"){
        if(document.getElementById("panel2").style.display != "block"){
            document.getElementById("panel2").style.display = "block";
            document.getElementById("panel1").style.display = "none";
            document.getElementById("panel3").style.display = "none";
        }
        
    }
    if(item.innerHTML == "杭州办公室"){
        if(document.getElementById("panel3").style.display != "block"){
            document.getElementById("panel3").style.display = "block";
            document.getElementById("panel2").style.display = "none";
            document.getElementById("panel1").style.display = "none";
        }
        
    }

    
}

