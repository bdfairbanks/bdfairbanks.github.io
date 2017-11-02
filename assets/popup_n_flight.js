window.addEventListener("load", function() {
  prime()
  duo()
});

function prime() {
  prime_pics()
  document.getElementsByClassName("modal__close")[0].addEventListener('click', close);
}
function duo() {
  give_wings()
}
function prime_pics(){
  box = document.getElementsByClassName("brag_pic");
  for (i=0; i<box.length; i++){
    box[i].addEventListener('click', popUp);
  }  
}
function popUp(event) {
  document.getElementById("modal").style.display = "block";
  document.getElementsByClassName("modal__body")[0].innerHTML = "<img src = \"" + event.target.src + "\" class=\"modal__pic\">";
} 

function close() {
  document.getElementById("modal").style.display = "none";
}

function give_wings() {
  wings = document.getElementsByClassName("flyin1")[0];
  bird= document.getElementsByClassName("bird1")[0];
  window.onscroll = function(){
    if (wings.getBoundingClientRect().top <= 0){
      bird.style.
     bird.style.marginLeft = from + "px";
    } 
  }

}

function appear(event) {
  bird = document.getElementsByClassName("flyin1")[0];
}