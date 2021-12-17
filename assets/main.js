const date = document.getElementById("date"),
  opening = document.getElementById("open"),
  navigation = document.getElementById("nav-phone");
AOS.init(),
  (date.textContent = new Date().getFullYear()),
  opening.addEventListener("click", () => {
    navigation.classList.toggle("block");
  });
let slideIndex = 1;
function currentSlide(e) {
  showSlides((slideIndex = e));
}
function showSlides(e) {
  let n,
    t = document.getElementsByClassName("mySlides"),
    s = document.getElementsByClassName("dot");
  for (
    e > t.length && (slideIndex = 1), e < 1 && (slideIndex = t.length), n = 0;
    n < t.length;
    n++
  )
    t[n].style.display = "none";
  for (n = 0; n < s.length; n++)
    s[n].className = s[n].className.replace(" active", "");
  (t[slideIndex - 1].style.display = "block"),
    (s[slideIndex - 1].className += " active");
}
showSlides(slideIndex),
  (window.onscroll = function () {
    myFunction();
  });
let navbar = document.getElementById("navbar"),
  sticky = navbar.offsetTop;
function myFunction() {
  window.pageYOffset >= sticky
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
}
