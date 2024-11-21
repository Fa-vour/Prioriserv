let contactInfo = document.querySelector('.contact-info');
let searchForm = document.querySelector('.search-form');


document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.toggle('active');
    searchForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    contactInfo.classList.remove('active');
};


let menuList = document.getElementById("menu-list")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px"
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
};
document.querySelector('#x-box').onclick = () =>{
    contactInfo.classList.remove('active');
};

window.onscroll = () =>{
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlida();
document.addEventListener("DOMContentLoaded", initializeSlida);

function initializeSlida(){
  if(slides.length > 0){
  slides[slideIndex].classList.add("displaySlide");
  intervalId = setInterval(nextSlide, 5000);
  }
}
function showSlide(index){
  if(index >= slides.length){
    slideIndex = 0
  }
  else if(index < 0){
    slideIndex = slides.length - 1;
  }
  slides.forEach(slide =>{
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex)
}
function nextSlide(){
  slideIndex++;
  showSlide(slideIndex)
}

function emailSend(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_zhgmyiv", "template_8r7druu", parms).then(alert("Email Sent!!!"))
}

// function emailSend(){

//     var userName = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;

//     var messageBody = "Name" + userName + 
//     "<br/> Phone" + phone +
//     "<br/> Email" + email;
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "favouroluchi33@gmail.com",
//         Password : "8E8B1AA5BDDDECC8BAF67717C84CB5EDCD49",
//         To : 'info@prioriservconsult.com',
//         From : "favouroluchi33@gmail.com",
//         Body : messageBody
//     }).then(
//       message => {
//         if(message=='OK'){
//             swal("Successful", "You clicked the button!", "success");
//         }
//         else{
//             swal("Error", "Something went wrong!", "error");
//         }
//       }
//     );
// }

//our services page
// let scrollContainer = document.querySelector(".gallery");
// let backBtn = document.querySelector("#backbtn");
// let nextBtn = document.querySelector("#nextbtn");
// let bacBtn = document.querySelector("#backbtn");
// let nxtBtn = document.querySelector("#nextbtn");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
  
// });

// nextBtn.addEventListener("click", ()=>{
//   scrollContainer.style.scrollBehavior = "smooth";
//   scrollContainer.scrollLeft +=900;
// });
// backBtn.addEventListener("click", ()=>{
//   scrollContainer.style.scrollBehaviour = "smooth";
//   scrollContainer.scrollLeft -=900;
// });

// nxtBtn.addEventListener("click", ()=>{
//   scrollContainer.style.scrollBehavior = "smooth";
//   scrollContainer.scrollLeft +=900;
// });
// bacBtn.addEventListener("click", ()=>{
//   scrollContainer.style.scrollBehaviour = "smooth";
//   scrollContainer.scrollLeft -=900;
// });

//scroll sections active link
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height){
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//       });
//     };
//   });
// };