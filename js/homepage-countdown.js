var htmlVar = document.getElementById('countdown');
var time = div.elements.countdown.value;
var date = moment.tz(time);
$('#clock').countdown(date.toDate(), function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
});
var dateString = date.format('dddd, MMMM Do h:mm a');
document.getElementById("clockString").innerHTML=dateString;