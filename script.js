var todayDate = moment().format("dddd, MMM Do");
$("#currentDay").text(todayDate);

//retrieve the item stored in local storage
function init() {
    var event1 = JSON.parse(localStorage.getItem("event1"));
    var event2 = JSON.parse(localStorage.getItem("event2"));
    var event3 = JSON.parse(localStorage.getItem("event3"));
    var event4 = JSON.parse(localStorage.getItem("event4"));
    var event5 = JSON.parse(localStorage.getItem("event5"));
    var event6 = JSON.parse(localStorage.getItem("event6"));
    var event7 = JSON.parse(localStorage.getItem("event7"));
    var event8 = JSON.parse(localStorage.getItem("event8"));
    var event9 = JSON.parse(localStorage.getItem("event9"));

    if(event1 !== null) {
        $('#9').val(event1);
    };

    if(event2 !== null) {
        $('#10').val(event2);
    }

    if(event3 !== null) {
        $('#11').val(event3);
    };

    if(event4 !== null) {
        $('#12').val(event4);
    };

    if(event5 !== null) {
        $('#13').val(event5);
    };

    if(event6 !== null) {
        $('#14').val(event6);
    };

    if(event7 !== null) {
        $('#15').val(event7);
    };

    if(event8 !== null) {
        $('#16').val(event8);
    };

    if(event9 !== null) {
        $('#17').val(event9);
    };
};


//Using each to store input variables for all - store the input value in a variable
    $(".button1").on("click",function () {
        
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));
        localStorage.setItem("event"+$(this).attr("data-index"),JSON.stringify($(this).siblings(".textarea").val()));

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
