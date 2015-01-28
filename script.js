console.log("LOADED");


$(document).ready(function(){
	setInterval (function(){
		var winwidth = $( window ).width();
		var winheight = $( window ).height();


	
		}, 50);
});

$('.p2').click(function(){
$('.p2').css('display' , 'none');
$('#pre').css('display' , 'none');
console.log($('#draw').width() + " x " + $('#draw').height);
});

$('#draw').click(function(){
var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
});