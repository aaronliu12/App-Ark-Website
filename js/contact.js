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

function accordion1(item){
    var items = document.getElementsByClassName("accordion");
    if(item.innerHTML == "2018"){
        if(document.getElementById("results2018").style.display != "block"){
            document.getElementById("results2018").style.display = "block";
            document.getElementById("results2017").style.display = "none";
            document.getElementById("results2016").style.display = "none";
            document.getElementById("results2015").style.display = "none";
            items[1].classList.remove("active");
            items[2].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
        }
        
    }
    if(item.innerHTML == "2017"){
        if(document.getElementById("results2017").style.display != "block"){
            document.getElementById("results2017").style.display = "block";
            items[0].classList.remove("active");
            items[2].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
            document.getElementById("results2018").style.display = "none";
            document.getElementById("results2016").style.display = "none";
            document.getElementById("results2015").style.display = "none";
        }
        
    }
    if(item.innerHTML == "2016"){
        if(document.getElementById("results2016").style.display != "block"){
            document.getElementById("results2016").style.display = "block";
            items[0].classList.remove("active");
            items[1].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
            document.getElementById("results2018").style.display = "none";
            document.getElementById("results2017").style.display = "none";
            document.getElementById("results2015").style.display = "none";
        }
        
    }
    if(item.innerHTML == "2015"){
        if(document.getElementById("results2015").style.display != "block"){
            document.getElementById("results2015").style.display = "block";
            items[0].classList.remove("active");
            items[1].classList.remove("active");
            items[2].classList.remove("active");
            item.classList.add("active");
            document.getElementById("results2018").style.display = "none";
            document.getElementById("results2017").style.display = "none";
            document.getElementById("results2016").style.display = "none";
        }
        
    }

    
}


function stories(item){
    if(item.firstChild.innerHTML == "学生案列"){
        if(document.getElementById("stories-section").style.display != "block"){
            document.getElementById("stories-section").style.display = "block";
            document.getElementById("tables-section").style.display = "none";
        }
        
    }
    if(item.firstChild.innerHTML == "过往成绩"){
        if(document.getElementById("tables-section").style.display != "block"){
            document.getElementById("tables-section").style.display = "block";
            document.getElementById("stories-section").style.display = "none";
            
        }
        
    }

    
}
