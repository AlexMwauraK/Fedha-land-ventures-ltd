//Menu Burger homepage
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navlinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        }else{
          link.style.animation = `navlinkFade 0.5s ease forward ${index / 7 + 4 }s`;
        } 
      });
      burger.classList.toggle('toggles');
    });
  }
  navSlide();
  
  //Automatic slide
  const myslide = document.querySelectorAll('.myslide'),
  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
counter += 1;
slidefun(counter);
}
function plusSlides(n) {
counter += n;
slidefun(counter);
resetTimer();
}
function currentSlide(n) {
counter = n;
slidefun(counter);
resetTimer();
}
function resetTimer() {
clearInterval(timer);
timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

let i;
for(i = 0;i<myslide.length;i++){
  myslide[i].style.display = "none";
}
for(i = 0;i<dot.length;i++) {
  dot[i].className = dot[i].className.replace(' active', '');
}
if(n > myslide.length){
   counter = 1;
   }
if(n < 1){
   counter = myslide.length;
   }
myslide[counter - 1].style.display = "block";
dot[counter - 1].className += " active";
}

// Testimonial slide 
$('.testimonials-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      },
  }
})

// Sumit button 
document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission

  // Check if all required fields are filled
  var nameInput = document.getElementsByName("Name")[0].value;
  var phoneInput = document.getElementsByName("Phone no")[0].value;
  var emailInput = document.getElementsByName("email")[0].value;
  var dateInput = document.getElementsByName("date")[0].value;
  var timeInput = document.getElementsByName("time")[0].value;

  if (nameInput && phoneInput && emailInput && dateInput && timeInput) {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Booking successful.",
    }).then(function() {
      // Submit the form after the user dismisses the pop-up
      document.querySelector("form").submit();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Opps!",
      text: "Please fill in all required fields.",
    });
  }
});

// Accordion 
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}