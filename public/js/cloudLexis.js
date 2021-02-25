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

/*$(".words button").click(changeWordColor);*/

/*
function customToggle(){
    $(".customList").css("display","none");
}
$(".customList").click(customToggle);


$("button #word9").click(function(){
  $("ul#customList").toggle();
})
*/

