function validateForm(){
    var name = document.forms['form-contact']['name'].value;
    var email = document.forms['form-contact']['email'].value;
    var destination = document.forms['form-contact']['destination'].value;

    if(name == "" || email == "" || destination == 0){
        alert("Data belum Lengkap");}
    else{
        alert("Data terinput")
    }
    return false;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("isi");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}