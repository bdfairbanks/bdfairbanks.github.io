window.addEventListener("load", function(){
	function hamburger() {
		var hamburger =document.getElementById("hamburger");
		hamburger.addEventListener("click", show);
	}
	function show() {
		style = window.getComputedStyle(document.getElementById("navPlus"), null).display
		if (style == "none"){
			document.getElementById("navPlus").style.display = "block" 
		}
		else{ 
			document.getElementById("navPlus").style.display = "none"
		} 
	}
	hamburger()
})