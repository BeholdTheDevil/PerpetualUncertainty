var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function myFunction(){
	var img = document.getElementById('info-window-image');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

var span = document.getElementsByClassName("close")[0];
