//TODO: 
// Enable setInterval
// Enable keys
// Load image only after DOM
// Enable mobile language switcher

container = document.getElementById('choose-language-container')
menu = document.getElementById('choose-language-dropdown')
language_switcher = document.getElementById('choose-language-btn');

language_switcher.addEventListener('click', function(){
     container.classList.toggle('show')
     menu.classList.toggle('show')
     aria_attr = language_switcher.getAttribute("aria-expanded")    
     language_switcher.setAttribute(!Boolean(aria_attr))
});

slideIndex = 0
slides = document.getElementsByClassName("carousel-item");

function showSlides(){
     var i;
     for (i=0; i < slides.length; i++){
          slides[i].classList.remove("active");
     }
     slides[slideIndex].classList.add("active");
     slideIndex++
     slideIndex = slideIndex % slides.length;
}

interval_length = 5000;
my_interval = setInterval(showSlides, interval_length);

app_carousel = document.getElementById('app');


app_carousel.addEventListener('mouseover',  function(){
     clearInterval(my_interval);
})

app_carousel.addEventListener('mouseout', function(){
     my_interval = setInterval(showSlides, interval_length);
})

prev_btn = document.getElementsByClassName("contr prev")[0]
next_btn = document.getElementsByClassName("contr next")[0]


prev_btn.addEventListener('click', function(){
     slides[slideIndex].classList.remove("active");
     slideIndex--
     slideIndex = (3 + slideIndex) % 3;
     slides[slideIndex].classList.add("active");
})

next_btn.addEventListener('click', function(){
     slides[slideIndex].classList.remove("active");
     slideIndex++
     slideIndex = slideIndex % 3;
     slides[slideIndex].classList.add("active");
})
