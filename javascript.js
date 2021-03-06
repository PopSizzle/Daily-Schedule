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

var textArea9 = $("#nine");
var textArea10 = $("#ten");
var textArea11 = $("#eleven");
var textArea12 = $("#twelve");
var textArea13 = $("#thirteen");
var textArea14 = $("#fourteen");
var textArea15 = $("#fifteen");
var textArea16 = $("#sixteen");
var textArea17 = $("#seventeen");

var rowArray = [row9, row10, row11, row12, row13, row14, row15, row16, row17]
var textArray = [textArea9, textArea10, textArea11, textArea12, textArea13, textArea14, textArea15, textArea16, textArea17];

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

function renderSaved(){
    for(i=0; i<textArray.length; i++){
        var num = i+9;
        var textBox = textArray[i];
        textBox.text(localStorage.getItem(num));

    }
}

$(document).on("click", ".saveBtn", function(){
    var num = $(this).attr("data-number");
    var index = num-9;
    var content = textArray[index].val().trim();

    localStorage.setItem(num, content);
})

$("#clear").on("click", function(){
    for(i=0; i<textArray.length; i++){
        var textBox = textArray[i];
        textBox.text("");
        localStorage.clear();
    }
})


updateHour();
renderSaved();