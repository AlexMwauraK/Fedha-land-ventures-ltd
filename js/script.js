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
  var firstIndex = 0;
var img = document.querySelectorAll('.images img');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

function showImage(index) {
  for (var i = 0; i < img.length; i++) {
    img[i].classList.remove('active');
  }
  img[index].classList.add('active');
}

function navigatePrevious() {
  firstIndex--;
  if (firstIndex < 0) {
    firstIndex = img.length - 1;
  }
  showImage(firstIndex);
}

function navigateNext() {
  firstIndex++;
  if (firstIndex >= img.length) {
    firstIndex = 0;
  }
  showImage(firstIndex);
}

prevButton.addEventListener('click', navigatePrevious);
nextButton.addEventListener('click', navigateNext);

function automaticSlide() {
  navigateNext(); // Show the next image immediately
  setTimeout(automaticSlide, 15000); // Continue with the automatic slide after the delay
}

automaticSlide();
