  window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}	

const posts = document.querySelectorAll('.gallery-item');
posts.forEach(post => {
	post.addEventListener('click', () => {

window.open(imgUrl, '_blank');
	});
