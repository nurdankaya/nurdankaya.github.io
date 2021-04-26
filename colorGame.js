$('#playDiv').hide();
$('#startDiv').show();
$('#finishedDiv').hide();

$("#btnNine, #btnSixteen, #btnTwentyfive").click(function () {
 $('#playDiv').show();
 $('#startDiv').hide();

 var seconds = document.getElementById("timer").textContent;
 var countdown = setInterval(function () {
  seconds--;
  document.getElementById("timer").textContent = seconds;
  if (seconds <= 0) {
   clearInterval(countdown);
   $('#playDiv').hide();
   var myNode = document.getElementById("finish");
   myNode.textContent = '';
   $("#finish").append('<h1 style="margin-top:20%" class="display-1 bg-danger text-white">SCORE = ' + score + ' </h1>');
   $('#finishedDiv').show();

  }
 }, 1000);

});



function getRandomColor() {
 var letters = '0123456789ABCDEF';
 var color = '#';
 for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

var wanted;
function getSquares(num) {
 var ix = Math.floor(Math.random() * num);     // returns a random integer from 0 to 9
 var jx = Math.floor(Math.random() * num);
 var row = "";
 for (var i = 0; i < num; i++) {
  $("#squares").append('<div id="row' + parseInt(i) + '" class="d-flex flex-row justify-content-center"></div>');
  row = "#row" + parseInt(i);

  for (var j = 0; j < num; j++) {
   var color = getRandomColor();
   if (ix == i && jx == j) {
    wanted = color;
    $("#wantedColor").append('<div style="background-color:' + color + '" class="square"></div>');
   }
   $(row).append('<div style="background-color:' + color + '" class="square"></div>');
  }
 }
}

var btn1 = 0, btn2 = 0, btn3 = 0;
$("#btnNine").click(function () {
 getSquares(9);
 btn1 = 1;
});

$("#btnSixteen").click(function () {
 getSquares(16);
 btn2 = 1;
});

$("#btnTwentyfive").click(function () {
 getSquares(25);
 btn3 = 1;
});

///// rgb to hex////////
var hexDigits = new Array
 ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
 return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
/////////////////////////////

var score = 0;
$(document).on('click', '.square', function (event) {    //for dynamically added elements
 var bColor = $(this).css('background-color');
 console.log('Background color of this div: ' + bColor)
 if (rgb2hex(bColor) == wanted) {
  score++;
  var myNode = document.getElementById("squares");
  myNode.textContent = '';
  myNode = document.getElementById("wantedColor");
  myNode.textContent = '';
  if (btn1 == 1) {
   getSquares(9);
  } else if (btn2 == 1) {
   getSquares(16);
  } else if (btn3 == 1) {
   getSquares(25);
  }
 }

});


$(".replay").click(function () {
 location.reload();

});

