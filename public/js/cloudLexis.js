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

/*
let btn1 = document.querySelector('#word1');
let btn2 = document.querySelector('#word2');
let btn3 = document.querySelector('#word3');
let btn4 = document.querySelector('#word4');
let btn5 = document.querySelector('#word5');
let btn6 = document.querySelector('#word6');
let btn7 = document.querySelector('#word7');
let btn8 = document.querySelector('#word8');

var buttonArray = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];
var arrayLength = buttonArray.length;
var clickCount = 0;
for (var i = 0; i < arrayLength; i++) {
  buttonArray[i].addEventListener('click', () => buttonArray[i].style.backgroundColor ='#FFC2AA')

  $(buttonArray[i]).click(function() {
    $(buttonArray[i]).css("background", "#FFC2AA");
 
    if (clickCount%2 == 0){
      $(buttonArray[i]).css("background", "#FFC2AA");
      clickCount += 1;
    }
    else if (clickCount%2 == 1){
      $(buttonArray[i]).css("background", "#BEE3DB");
      clickCount += 1;
    }
  })
}
*/


var clickCount1 = 0;
function changeWordColor1(){
  if (clickCount1%2 == 0){
    $( "button#word1" ).css("background", "#FFC2AA");
    clickCount1 += 1;
  }
  else if (clickCount1%2 == 1){
    $( "button#word1" ).css("background", "#BEE3DB");
    clickCount1 += 1;
  }
}

$("button#word1").click(changeWordColor1);

var clickCount2 = 0;
function changeWordColor2(){
  if (clickCount2%2 == 0){
    $( "button#word2" ).css("background", "#FFC2AA");
    clickCount2 += 1;
  }
  else if (clickCount2%2 == 1){
    $( "button#word2" ).css("background", "#BEE3DB");
    clickCount2 += 1;
  }
}

$("button#word2").click(changeWordColor2);

var clickCount3 = 0;
function changeWordColor3(){
  if (clickCount3%2 == 0){
    $( "button#word3" ).css("background", "#FFC2AA");
    clickCount3 += 1;
  }
  else if (clickCount3%2 == 1){
    $( "button#word3" ).css("background", "#BEE3DB");
    clickCount3 += 1;
  }
}

$("button#word3").click(changeWordColor3);

var clickCount4 = 0;
function changeWordColor4(){
  if (clickCount4%2 == 0){
    $( "button#word4" ).css("background", "#FFC2AA");
    clickCount4 += 1;
  }
  else if (clickCount4%2 == 1){
    $( "button#word4" ).css("background", "#BEE3DB");
    clickCount4 += 1;
  }
}

$("button#word4").click(changeWordColor4);

var clickCount5 = 0;
function changeWordColor5(){
  if (clickCount5%2 == 0){
    $( "button#word5" ).css("background", "#FFC2AA");
    clickCount5 += 1;
  }
  else if (clickCount5%2 == 1){
    $( "button#word5" ).css("background", "#BEE3DB");
    clickCount5 += 1;
  }
}

$("button#word5").click(changeWordColor5);

var clickCount6 = 0;
function changeWordColor6(){
  if (clickCount6%2 == 0){
    $( "button#word6" ).css("background", "#FFC2AA");
    clickCount6 += 1;
  }
  else if (clickCount6%2 == 1){
    $( "button#word6" ).css("background", "#BEE3DB");
    clickCount6 += 1;
  }
}

$("button#word6").click(changeWordColor6);

var clickCount7 = 0;
function changeWordColor7(){
  if (clickCount7%2 == 0){
    $( "button#word7" ).css("background", "#FFC2AA");
    clickCount7 += 1;
  }
  else if (clickCount7%2 == 1){
    $( "button#word7" ).css("background", "#BEE3DB");
    clickCount7 += 1;
  }
}

$("button#word7").click(changeWordColor7);

var clickCount8 = 0;
function changeWordColor8(){
  if (clickCount8%2 == 0){
    $( "button#word8" ).css("background", "#FFC2AA");
    clickCount8 += 1;
  }
  else if (clickCount8%2 == 1){
    $( "button#word8" ).css("background", "#BEE3DB");
    clickCount8 += 1;
  }
}

$("button#word8").click(changeWordColor8);

let addbtn = document.querySelector('button');
let input = document.querySelector('input');
let select = document.querySelector('select');

$(".userinput button").click(function() {
  let option = document.createElement('option');
  option.value = input.value.toLowerCase();
  option.text = input.value;
  select.append(option);
  input.value='';
})
