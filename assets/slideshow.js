window.currentSlide = 0;
window.addEventListener("load", function(){
  window.getSlideshow = document.getElementsByClassName("slideshow");
  window.getInfo = document.getElementsByClassName("slideshow_info_display");
  display_on_load();  
  ready_buttons();
});

function display_on_load(){
  getSlideshow[0].style.display = "block";
  getInfo[0].style.display ="block";    
}

function ready_buttons(){
  document.getElementsByClassName("next")[0].addEventListener("click", move_slides);  
  document.getElementsByClassName("prev")[0].addEventListener("click", move_slides);
  document.getElementsByClassName("gallery")[0].addEventListener("click", switch_display);
}

function hide_buttons(){
  document.getElementsByClassName("next")[0].style.display = "none";  
  document.getElementsByClassName("prev")[0].style.display = "none";
  document.getElementsByClassName("gallery")[0].style.display = "none";
}

function show_buttons(){
  document.getElementsByClassName("next")[0].style.display = "block";  
  document.getElementsByClassName("prev")[0].style.display = "block";
  document.getElementsByClassName("gallery")[0].style.display = "block";
}

function move_slides(event){
  clear_old_slide()
  debugger
  if (event.target.dataset.direction == "next") {
    direction = next_slide_index()
  } else if (event.target.dataset.direction == "prev") {
    direction = prev_slide_index()
  }
  make_next_slide_appear()
}

function clear_old_slide(){
  getSlideshow[currentSlide].style.display = "none";
  getInfo[currentSlide].style.display = "none";
}

function make_next_slide_appear(){
  getSlideshow[direction].style.display = "block";
  getInfo[currentSlide].style.display = "block";
}

function switch_display(){
  if (getSlideshow.length == 0) {
    show_slideshow()
    getInfo[currentSlide].style.display = "block"; 
  } else {
   show_gallery()
   hide_buttons()
  }
}

function show_slideshow(){
  var gallery_item = document.getElementsByClassName("grid-item")
  for (var i=0; i<gallery_item.length;){
    if (gallery_item[0].className == "grid-item grid-item--width3"){
     gallery_item[0].className = "slideshow mural";
    } else {
      gallery_item[0].className="slideshow";
    }
  }
}

function show_gallery(){
  for (var i=0; i<getSlideshow.length;){
    if (getSlideshow[0].className == "slideshow mural"){
      getSlideshow[0].className = "grid-item grid-item--width3";
    } else { 
      getSlideshow[0].className = "grid-item grid-sizer";
    }
  }
  for (var i=0; i<getInfo.length; i++){
    getInfo[i].style.display = "none"
  }

  var grid = document.querySelector('.grid');
  var msnry;

  imagesLoaded( grid, function() {
    msnry = new Masonry( grid, {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true
    });
  });
  prep_grid_items()
} 

function prep_grid_items(){
  pic = document.getElementsByClassName("grid-item")
  for (var i = 0; i < pic.length; i++){
    pic[i].addEventListener("click", show_this_slide)
  }
}

function show_this_slide(){
  show_slideshow()
  getSlideshow[0].style.display = "none"
  for (var i=0; i<getSlideshow.length; i++){
    getSlideshow[i].removeAttribute("style");
    getInfo[i].removeAttribute("style");
    if (getSlideshow[i].currentSrc == event.target.currentSrc) {
      getSlideshow[i].style.display = "block";
      currentSlide = i
    }
  }

  show_buttons()
  document.getElementsByClassName("grid")[0].removeAttribute("style");
  getInfo[currentSlide].style.display = "block"
}

function next_slide_index(){
  var slide_check = currentSlide
  slide_check += 1
  if (slide_check > current_painting()) {
    currentSlide = 0
  } else { add_to_tracker()
  }
  return currentSlide
}

function prev_slide_index(){
  var slide_check = currentSlide
  slide_check += -1
  if ( slide_check < 0){
    currentSlide = current_painting();
  } else {
    subtract_from_tracker()
  }
  return currentSlide
}

function current_painting(){
   return getSlideshow.length -1;
}

function add_to_tracker(){
  currentSlide += 1;
  return currentSlide
}

function subtract_from_tracker(){
  currentSlide -= 1;
  return currentSlide
}
