var dataIndexs=[];
var cleanedData=[];
function addToCleanedData(string){
  index=dataIndexs.indexOf(string);
  if(index==-1){
    cleanedData.push([string,8]);
    dataIndexs.push(string);
  }else{
    cleanedData[index][1]+=8;
  }
}

function getPreparedData(){
  return {list: cleanedData};
}

var clickCount = 0;
function changeWordColor1(){
  if (clickCount%2 == 0){
    $( "button#word1" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "button#word1" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$("button#word1").click(changeWordColor1);

function changeWordColor2(){
  if (clickCount%2 == 0){
    $( "button#word2" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "button#word2" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$("button#word2").click(changeWordColor2);

function changeWordColor3(){
  if (clickCount%2 == 0){
    $( "button#word3" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "button#word3" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$("button#word3").click(changeWordColor3);

function changeWordColor4(){
  if (clickCount%2 == 0){
    $( "button#word4" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "button#word4" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$("button#word4").click(changeWordColor4);

function changeWordColor5(){
  if (clickCount%2 == 0){
    $( "button#word5" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "button#word5" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$("button#word5").click(changeWordColor5);

function changeWordColor6(){
  if (clickCount%2 == 0){
    $( "button#word6" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "button#word6" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$("button#word6").click(changeWordColor6);

function changeWordColor7(){
  if (clickCount%2 == 0){
    $( "button#word7" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "button#word7" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$("button#word7").click(changeWordColor7);

function changeWordColor8(){
  if (clickCount%2 == 0){
    $( "button#word8" ).css("background", "#FFC2AA");
    clickCount += 1;
  }
  else if (clickCount%2 == 1){
    $( "button#word8" ).css("background", "#BEE3DB");
    clickCount += 1;
  }
}

$("button#word8").click(changeWordColor8);

