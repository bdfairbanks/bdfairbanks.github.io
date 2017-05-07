window.addEventListener("load", function() {
  prime()

});

function prime() {
  prime_pics()
  document.getElementsByClassName("modal__close")[0].addEventListener('click', close);
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