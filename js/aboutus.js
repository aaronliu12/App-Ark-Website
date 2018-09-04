function accordion1(item){
    var items = document.getElementsByClassName("accordion");
    if(item.firstChild.innerHTML == "公司简介"){
        if(document.getElementById("results2018").style.display != "block"){
            document.getElementById("results2018").style.display = "block";
            document.getElementById("results2017").style.display = "none";
            document.getElementById("results2016").style.display = "none";
            items[1].classList.remove("active");
            items[2].classList.remove("active");
            item.classList.add("active");
        }
        
    }
    if(item.firstChild.innerHTML == "凭远态度"){
        if(document.getElementById("results2017").style.display != "block"){
            document.getElementById("results2017").style.display = "block";
            items[0].classList.remove("active");
            items[2].classList.remove("active");
            item.classList.add("active");
            document.getElementById("results2018").style.display = "none";
            document.getElementById("results2016").style.display = "none";
        }
        
    }
    if(item.firstChild.innerHTML == "我们的优势"){
        if(document.getElementById("results2016").style.display != "block"){
            document.getElementById("results2016").style.display = "block";
            items[0].classList.remove("active");
            items[1].classList.remove("active");
            item.classList.add("active");
            document.getElementById("results2018").style.display = "none";
            document.getElementById("results2017").style.display = "none";
        }
        
    }

    
}