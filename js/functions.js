$(document).ready(function() {
	// App Menu
	$('#appMenu_icon').click(function() {
		$('#appMenu').removeClass('menuApp_displayNone');
	})
	$('#menuApp_closeBtn').click(function() {
		$('#appMenu').addClass('menuApp_displayNone');	
	})
})