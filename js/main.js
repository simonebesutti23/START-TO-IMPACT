var nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 25){
        nav.classList.add('bg-white');
    }else {
        nav.classList.remove('bg-white');
    }
})


var typed = new Typed(".auto-input" , {
    strings: ["Student", "Web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})