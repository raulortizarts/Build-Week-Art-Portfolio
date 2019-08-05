
var slideIndex,slides,indicators,captionText;

function initcarousel(){
    slideIndex = 0;
    //Below im getting the element in the html class slide and defining them as slides var
    slides=document.getElementsByClassName("slide");
    //access the style pro of the prev def element and
    //making it visible
    slides[slideIndex].style.opacity=1;

    //defining the var captiontext as the selector for class captiontext
    captionText=document.querySelector(".captionTextHolder .captionText");
    //using the innertext property, and getting text within each captiontext element
    captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

    //disabling nextPrevBtn if slide count is one
    if(slides.length<2){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

    //adding indicators elements using a for loop
    indicators=[];
    var slides_nav=document.getElementById("slides_nav"),i;
    for (i = 0; i < slides.length; i++) {
        //took the slides and ran a for loop 
        //for each element creates a span
        var indicator=document.createElement("span");
        //adds class of indicators to each
        indicator.classList.add("indicators");
        //appends under slides_nav class element
        slides_nav.append(indicator);

        indicator.setAttribute("onclick","moveSlide("+i+")");
        //push the createdelement to the array
        indicators.push(indicator);
    }
    //to each created element in the array adds class of active
    indicators[slideIndex].classList.add("active");
}
//we just basically created some empty elements in the html under slides_nav
//these can be styled with css to be visible

//calling the func
initcarousel();

function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    //if index is greater than the n arg
    //moves current and next slides into position
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
        //do the opposite if lesser than
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "slide";
            //hides image and removes class active
            slides[i].style.opacity=0;
            indicators[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        indicators[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="block";
    }

}
var timer=null;

//using the setTimer func activate slides moving func every interval
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },5000);
}

//call timer
setTimer();

//stoping or activating timer with button
function playPauseSlides() {
    var playPauseBtn=document.getElementById("playPause");
    //if timer is null move icon image to possition 
    //and vise versa
    if(timer==null){
        setTimer();
        playPauseBtn.style.backgroundPositionY="0px"
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-33px"
    }
}