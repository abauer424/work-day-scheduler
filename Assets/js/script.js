$(document).ready(function() {
$(".save-btn").on("click", function(){
var hourKey = $(this).parent().parent().attr("id")
var activity =$(this).parent().siblings(".description").val()
localStorage.setItem(hourKey, activity)

})
})


//current date
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY");

//text area
function myFunction() {
    var x = document.getElementById("hour-9").value;
    //set item
    $("#hour-9 .description").val(localStorage.setItem("hour-9"));
    //retrieve
    document.getElementById("hour-9").innerHtml=
    localStorage.getItem("hour-9");
}
