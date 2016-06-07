$(document).ready(function (){
	$('#values').append('Her showing mercy:<br>' + JSON.stringify(mercyOptions, undefined, 2) + '<br><br>Their options during the fight:<br>' + JSON.stringify(theirOptions, undefined, 2));
});