function accordion(item){
    var items = document.getElementsByClassName("accordion");
    if(item.innerHTML == "上海办公室"){
        if(document.getElementById("panel1").style.display != "block"){
            document.getElementById("panel1").style.display = "block";
            document.getElementById("panel2").style.display = "none";
            document.getElementById("panel3").style.display = "none";
            document.getElementById("panel4").style.display = "none";
            items[1].classList.remove("active");
            items[2].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
        }
        
    }
    if(item.innerHTML == "苏州办公室"){
        if(document.getElementById("panel2").style.display != "block"){
            document.getElementById("panel2").style.display = "block";
            document.getElementById("panel1").style.display = "none";
            document.getElementById("panel3").style.display = "none";
            document.getElementById("panel4").style.display = "none";
            items[0].classList.remove("active");
            items[2].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
        }
        
    }
    if(item.innerHTML == "杭州办公室"){
        if(document.getElementById("panel3").style.display != "block"){
            document.getElementById("panel3").style.display = "block";
            document.getElementById("panel2").style.display = "none";
            document.getElementById("panel1").style.display = "none";
            document.getElementById("panel4").style.display = "none";
            items[0].classList.remove("active");
            items[1].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
        }
        
    }
        if(item.innerHTML == "温州办公室"){
        if(document.getElementById("panel4").style.display != "block"){
            document.getElementById("panel4").style.display = "block";
            document.getElementById("panel2").style.display = "none";
            document.getElementById("panel1").style.display = "none";
            document.getElementById("panel3").style.display = "none";
            items[0].classList.remove("active");
            items[1].classList.remove("active");
            items[2].classList.remove("active");
            item.classList.add("active");
        }
        
    }

    
}

function accordion1(item){
    var items = document.getElementsByClassName("accordion");
    if(item.innerHTML == "2018" || item.innerHTML == "STEM"){
        if(document.getElementById("results2018").style.display != "block"){
            document.getElementById("results2018").style.display = "block";
            document.getElementById("results2017").style.display = "none";
            document.getElementById("results2016").style.display = "none";
            document.getElementById("results2015").style.display = "none";
            document.getElementById("results2019").style.display = "none";
            items[1].classList.remove("active");
            items[2].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
        }
        
    }
    if(item.innerHTML == "2017" || item.innerHTML == "人文社科"){
        if(document.getElementById("results2017").style.display != "block"){
            document.getElementById("results2017").style.display = "block";
            items[0].classList.remove("active");
            items[2].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
            document.getElementById("results2018").style.display = "none";
            document.getElementById("results2016").style.display = "none";
            document.getElementById("results2015").style.display = "none";
            document.getElementById("results2019").style.display = "none";
        }
        
    }
    if(item.innerHTML == "2016" || item.innerHTML == "商业"){
        if(document.getElementById("results2016").style.display != "block"){
            document.getElementById("results2016").style.display = "block";
            items[0].classList.remove("active");
            items[1].classList.remove("active");
            items[3].classList.remove("active");
            item.classList.add("active");
            document.getElementById("results2018").style.display = "none";
            document.getElementById("results2017").style.display = "none";
            document.getElementById("results2015").style.display = "none";
            document.getElementById("results2019").style.display = "none";
        }
        
    }
    if(item.innerHTML == "2015" || item.innerHTML == "内部资源"){
        if(document.getElementById("results2015").style.display != "block"){
            document.getElementById("results2015").style.display = "block";
            items[0].classList.remove("active");
            items[1].classList.remove("active");
            items[2].classList.remove("active");
            item.classList.add("active");
            document.getElementById("results2018").style.display = "none";
            document.getElementById("results2017").style.display = "none";
            document.getElementById("results2016").style.display = "none";
            document.getElementById("results2019").style.display = "none";
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


function stories2(item){
    if(item.firstChild.innerHTML == "服务模式"){
        if(document.getElementById("service-section").style.display != "block"){
            document.getElementById("service-section").style.display = "block";
            document.getElementById("team-section").style.display = "none";
            document.getElementById("activities-section").style.display = "none";
        }
        
    }
    if(item.firstChild.innerHTML == "顾问团队"){
        if(document.getElementById("team-section").style.display != "block"){
            document.getElementById("team-section").style.display = "block";
            document.getElementById("service-section").style.display = "none";
            document.getElementById("activities-section").style.display = "none";
        }
        
    }
    if(item.firstChild.innerHTML == "活动资源"){
        if(document.getElementById("activities-section").style.display != "block"){
            document.getElementById("activities-section").style.display = "block";
            document.getElementById("team-section").style.display = "none";
            document.getElementById("service-section").style.display = "none";
        }
        
    }

    
}