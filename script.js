
function scrollInView(){
    var scroll = document.querySelectorAll(".scrollInView");
    
    for(var i = 0; i < scroll.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = scroll[i].getBoundingClientRect().top;
        var elementVisible = 1000;
        if(elementTop < windowHeight ){
            scroll[i].classList.add("scrollInView-active");
        }else{
            scroll[i].classList.remove("scrollInView-active");
        }
    }
}

window.addEventListener("scroll", scrollInView);
//scrollInView();

console.log("hello");