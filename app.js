  $('#middle').hide();
  
$( "#btn1" ).click(function() {
  $('#middle').show();
  $('#educationDiv').show();
  $('#experienceDiv').hide();
  $('#projectsDiv').hide();
});

$( "#btn2" ).click(function() {
  $('#middle').show();
  $('#educationDiv').hide();
  $('#experienceDiv').show();
  $('#projectsDiv').hide();
});

$( "#btn3" ).click(function() {
  $('#middle').show();
  $('#educationDiv').hide();
  $('#experienceDiv').hide();
  $('#projectsDiv').show();
});

$("#btn1").click(function() {
    $('html, body').animate({
        scrollTop: $("#educationDiv").offset().top
    }, 300);
});
$("#btn2").click(function() {
    $('html, body').animate({
        scrollTop: $("#experienceDiv").offset().top
    }, 300);
});
$("#btn3").click(function() {
    $('html, body').animate({
        scrollTop: $("#projectsDiv").offset().top
    }, 300);
});