var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})




var titleText = document.title;

function titleMarquee() {

 titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
 document.title = titleText;
 setTimeout("titleMarquee()", 100);
 }