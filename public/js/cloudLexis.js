var clickCount = 0;
function changeWordColor(){
  if (clickCount%2 == 0){
    $( ".words button" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( ".words button" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$(".words button").click(changeWordColor);

/*
function customToggle(){
    $(".customList").css("display","none");
}
$(".customList").click(customToggle);


$("button #word9").click(function(){
  $("ul#customList").toggle();
})
*/

