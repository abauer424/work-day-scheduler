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
    var x = document.getElementById("text area").value;
    //set item
    $("#hour-9 .description").val(localStorage.setItem("text area"));
    //retrieve
    document.getElementById("text area").innerHtml=
    localStorage.getItem("text area");
}
