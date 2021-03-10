var dataIndexs=[];
var cleanedData=[];
function addToCleanedData(string){
  index=dataIndexs.indexOf(string);
  if(index==-1){
    cleanedData.push([string,25]);
    dataIndexs.push(string);
  }else{
    cleanedData[index][1]+=25;
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
  $(".words .select").each(function(){
    tempData.push($(this).text());
  });
  console.log(tempData);
  console.log(getDate());
  $.post("/entry", {"date": getDate(), "words": tempData} );
}

var tempData= [];

$(".words button").click(function() {
  $(this).toggleClass("select");
  if ($(this).hasClass("select")) {
      $(this).css("background-color", "#FFC2AA");
  }
  else {
    $(this).css("background-color", "#BEE3DB");
  }
})

$( "#custom" ).click(function() {
  $(this).toggleClass( 'on' );
  if ($(this).hasClass( 'on' ) & $(this).hasClass("select")) {
    $(".customlist").show();
    $('#selection').click(function() {
      $("#custom").text($("#selection").val());
    });
  }else{
    $(".customlist").hide();
  }
})

$( "#savebtn" ).click(function() {
  $(".customlist").hide();
  $(this).toggleClass( 'on' );
  $("#custom").toggleClass("select");
  $("#custom").css("background-color", "#BEE3DB");
  $(this).toggleClass("select");
})

$(".add button").click(function() {
  $(this).toggleClass("select");
  $("input[type=text]").each(function() {
    $("#instruction").after('<option>' + $(this).val() + '</option>');
  })
})

$("#saveCloud").click(saveToPDF);

function saveToPDF(){
  var imgData;
  html2canvas($("#my_canvas"), {
      quality: 4,
      scale: 10,
      useCORS: true,
      onrendered: function (canvas) {
          imgData = canvas.toDataURL(
             'image/png');
          var doc = new jsPDF('p', 'pt', 'a4');
          doc.addImage(imgData, 'PNG', 100, 100);
          doc.internal.scaleFactor = 1.55;
          doc.save('sample-file.pdf');
      }
  });
};
