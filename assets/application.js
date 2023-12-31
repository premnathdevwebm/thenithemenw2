// Put your application javascript here
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slides img");
  if (slides.length) {
    const totalSlides = slides.length;
    let slideWidth = slides[0].clientWidth;

    window.addEventListener("resize", () => {
      slideWidth = slides[0].clientWidth;
    });

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      moveCarouselTo(currentSlide);
    }, 3000);

    function moveCarouselTo(slide) {
      const slideTrack = document.querySelector(".carousel-slides");
      slideTrack.style.transform = "translateX(-" + slide * slideWidth + "px)";
    }
  }

  const cartButton = document.getElementById("cartclick");
  cartButton.addEventListener("click", function () {
    window.location.href = "/cart";
  });

  const loginButton = document.getElementById("loginclick");
  loginButton.addEventListener("click", function () {
    window.location.href = "/account/login";
  });
  // readblog
  const readBlogButto = document.getElementById("readblog")
  readBlogButto.addEventListener("click", function () {
    window.location.href = "/blogs/news";
  });
});

function gotonewCollection(){
  window.location.href = "/collections/new-collection"
}
function gotobestSellers(){
  window.location.href = "/collections/new-collection"
}
function gotoourfestive(){
  window.location.href = "/collections/shop-our-festivals"
}