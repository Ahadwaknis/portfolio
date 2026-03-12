// Scroll animation

ScrollReveal().reveal('.card',{
distance:'60px',
duration:2000,
origin:'bottom',
interval:200
})

ScrollReveal().reveal('.skill',{
distance:'40px',
interval:200
})


// Typing animation

var typed = new Typed(".typing", {

strings:[
"Full Stack Developer",
"Python Developer",
"Web Designer",
"AI Enthusiast"
],

typeSpeed:80,
backSpeed:50,
loop:true

})