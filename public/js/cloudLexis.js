var clickCount = 0;
function changeWordColor(){
  if (clickCount%2 == 0){
    $( "p.word" ).css("background-color", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "p.word" ).css("background-color", "#BEE3DB");
    clickCount += 1;
  }
}

$("p.word").click(changeWordColor);