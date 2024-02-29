let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}


// Automatic Image Sliding Code
let currAboutSlideIndex = 0;
setInterval(() => {
    let currImgSrc = document.querySelectorAll('.about .controls .control-btn');    
    let src = currImgSrc[currAboutSlideIndex].getAttribute('data-src');
    document.querySelector('.about .image-container .image').src = src;
    if(currAboutSlideIndex === currImgSrc.length - 1) {
        currAboutSlideIndex = 0;
    }
    else {
        currAboutSlideIndex += 1
    } 
}, 3000);

// Automatic Image Sliding Code Ends

//Animation 2

let currAboutSlideIndex_one = 0;
setInterval(() => {
    let currImgSrc_one = document.querySelectorAll('.product .controls .control-btn');    
    let src_one = currImgSrc_one[currAboutSlideIndex].getAttribute('data-src');
    document.querySelector('.product .image-container .image').src = src_one;
    if(currAboutSlideIndex === currImgSrc_one.length - 1) {
        currAboutSlideIndex = 0;
    }
    else {
        currAboutSlideIndex += 1
    } 
}, 3000);


//Animation 2 over


document.querySelectorAll('.about .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .image-container .image').src = src;
        document.querySelectorAll('.about .controls .control-btn')
    }    
});

document.querySelectorAll('.product .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.product .image-container .image').src = src;
        document.querySelectorAll('.product .controls .control-btn')

    }
});

let slides = document.querySelectorAll('.book .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

var swiper = new Swiper('.gallery-slider', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop:true,  
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        634: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2,
        },
    },
});


/*for counting */

let valueDisplays = document.querySelectorAll(".num")
let interval = 7000;

valueDisplays.forEach((valueDisplay) =>{
    let data = valueDisplay.getAttribute("data-val");

    let startValue = 0;
    let endValue = parseInt(data);
    let duration = Math.floor(interval / endValue);

    if(data.charAt(data.length - 1) != "+")
        duration = 400

    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue)
            clearInterval(counter);
        if(data.charAt(data.length - 1) == "+")
            valueDisplay.innerHTML += "+"
            
    }, duration);

    
    
    // valueDisplay.style.fontSize = "4rem";
    // valueDisplay.style.color = "#fff";

});
