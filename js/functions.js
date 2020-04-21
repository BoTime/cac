$(document).ready(function() {
	// App Menu
	$('#appMenu_icon').click(function() {
		$('#appMenu').removeClass('menuApp_displayNone');
	})
	$('#menuApp_closeBtn').click(function() {
		$('#appMenu').addClass('menuApp_displayNone');	
	})

	$("#copy").on("tap",function(){
	    var val = $("#textAreas").val();
	    Clipboard.copy(val);
	});
})


function myFunction() {
  var copyText1 = document.getElementById("myInput1");
  var copyText2 = document.getElementById("myInput2");
  copyText1.select();
  copyText2.select();
  copyText1.setSelectionRange(0, 99999)
  copyText2.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied!");
}
