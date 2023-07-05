

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

const contactForm = document.querySelector("#form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#emailId");
const messageInput = document.querySelector("#message");


const publicKey = "ZOsENfQL-H8edUhqt";
const serviceId = "service_6lch37a";
const templateId = "template_upu0jsq"

emailjs.init(publicKey);

contactForm.addEventListener("submit" , e => {
    e.preventDefault();
    submitBtn.innerText = "Just a moment...."

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }


    emailjs.send(serviceId, templateId, inputFields)
    .then(() => {
        submitBtn.innerText = "Message Sent Successfully";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
        console.log(error);
        submitBtn.innerText = "Something went wrong"
    });
});