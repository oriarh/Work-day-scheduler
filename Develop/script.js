var todayDate = moment().format("dddd, MMM Do");
$("#currentDay").text(todayDate);

//retrieve the item stored in local storage
function init() {
    var event1 = JSON.parse(localStorage.getItem("event"));
    if(event1 !== null) {
        $('#9').val(event1);
    }
};

//store the input value in a variable
$("#button1").on("click",function () {
    console.log($('#9').val());
    console.log("button is working");
    localStorage.setItem("event",JSON.stringify($('#9').val()));

    //Show the status message
    $("#appointmentLogged").css("display","block");    
});

init();

//Change the background color of the input according to the time
var timenow = moment().format("H");

$("input").each(function(){
    var eventTime = parseInt($(this).attr("id"));
    console.log(eventTime);
    if (eventTime < +timenow) {
        $(this).addClass("past");
    }
    else if (eventTime === +timenow) {
        $(this).addClass("present");
    }
    else if (eventTime > +timenow) {
        $(this).addClass("future");
    };
});

console.log(+timenow);
