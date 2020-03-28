$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
console.log(moment().hour());

var row9 = $("#9");
var row10 = $("#10");
var row11 = $("#11");
var row12 = $("#12");
var row13 = $("#13");
var row14 = $("#14");
var row15 = $("#15");
var row16 = $("#16");
var row17 = $("#17");

var rowArray = [row9, row10, row11, row12, row13, row14, row15, row16, row17]

function updateHour(){
    for(var i=0; i<rowArray.length; i++){
        var  row = rowArray[i];
        if(moment().hour()>i+9){
            row.addClass("past");
        }
        else if(moment().hour()===i+9){
            row.addClass("present");
        }
        else if(moment().hour()<i+9){
            row.addClass("future")
        }
    }
}



updateHour();
