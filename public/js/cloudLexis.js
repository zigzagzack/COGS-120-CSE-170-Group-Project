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

$("button#submit").click(submiting);

function getDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
}

function submiting(){
  console.log(tempData);
  console.log(getDate());
  $.post("/entry", {"date": getDate(), "words": tempData} );
}

var tempData= [];

$(".words button").click(function() {
  $(this).toggleClass("select");
  if ($(this).hasClass("select")) {
      $(this).css("background-color", "#FFC2AA");
      tempData.push($(this).text());
  }
  else {
    $(this).css("background-color", "#BEE3DB");
    tempData.splice(tempData.indexOf($(this).text()),1);
  }
})

$( "#custom" ).click(function() {
  $(this).toggleClass( 'on' );
  if ($(this).hasClass( 'on' ) ) {
    $(".customlist").show();
    $('#selection').click(function() {
      $("#custom").text($("#selection").val());
      tempData.push($("#custom").text());
    });
  }else{
    $(".customlist").hide();
  }
})

$( "#savebtn" ).click(function() {
  $(this).toggleClass( 'active' );
  if ($(this).hasClass( 'active' ) ) {
    $(".customlist").hide();
  }else{
    $(".customlist").show();
  }
})



/*
let addbtn = document.querySelector('.add button');
let input = document.querySelector('input');
let select = document.querySelector('select');

addbtn.addEventListener('click', () => {
  let option = document.createElement('option');
  option.text = input.value;
  select.add(option,0);
})
var createoption= $("option").append();
$(".add button").click(function({
  $("option").append($("input").val());
  $("#selection").add(($("option").append(),1));
})
*/

