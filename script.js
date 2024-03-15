

function mostrarItem(item) {
    var a = item
    console.log(a)
}






//       Lógica do SLIDE

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("imagem");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}