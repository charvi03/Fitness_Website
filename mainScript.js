let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //getPost()
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

const dailypost = document.querySelectorAll(".quote");
const quoteTitle = document.querySelector("[data-quoteTitle]");
const swiperContainer = document.querySelector(".blogs-slider");
const createSlide = document.querySelector(".createSlide");

const apiKey = "LTn5vNHSA0riVDyddRz5uA==jIbmWG57OnnvDyk4";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
var category = "fitness";
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=" + category;

async function getPost() {
  for (let index = 0; index < 5; index++) {
    const response = await fetch(apiUrl, options);
    var data = await response.json();
    let text = data[0].quote;
    dailypost[index].innerText = text;
  }
}

getPost();
