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
    });
  }else{
    $(".customlist").hide();
  }
})

$( "#savebtn" ).click(function() {
  $(this).toggleClass( 'active' );
  if ($(this).hasClass( 'active' ) ) {
    $(".customlist").hide();
    tempData.push($("#custom").text());
    tempData.splice(tempData.indexOf("custom"),1);
    tempData.splice(tempData.indexOf("save"),1);
  }else{
    $(".customlist").show();
  }
})

$(".add button").click(function() {
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
