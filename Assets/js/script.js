$(document).ready(function() {
$(".save-btn").on("click", function(){
var hourKey = $(this).parent().parent().attr("id")
var activity =$(this).parent().siblings(".description").val()
localStorage.setItem(hourKey, activity)

})
})
$("#hour-9 .description").val(localStorage.getItem("hour-9"))

//current date
document.getElementById("currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY");
