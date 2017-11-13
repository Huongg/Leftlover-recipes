
$(document).ready(function(){
	
	$('#checkbox1').click(function() {              
		$('#recipe-1').toggle();
        $('#recipe-2').toggle();
        $('#recipe-3').toggle();
        $('#recipe-4').toggle();
        $('#recipe-5').toggle();
        $('#recipe-6').toggle();
        $('#recipe-8').toggle();

	$('#checkbox2').click(function() {              
		$('#recipe-1').toggle();
        $('#recipe-3').toggle();
        $('#recipe-5').toggle();
        $('#recipe-7').toggle();
	});

	$('#checkbox3').click(function() {              
		$('#recipe-2').toggle();
        $('#recipe-4').toggle();
        $('#recipe-6').toggle();
        $('#recipe-8').toggle();
        $('#recipe-9').toggle();
	});

	$('#checkbox4').click(function() {              
		$('#recipe-1').toggle();
        $('#recipe-3').toggle();
        $('#recipe-4').toggle();
        $('#recipe-7').toggle();
        $('#recipe-8').toggle();
        $('#recipe-9').toggle();
	});

	$('#checkbox5').click(function() {              
		$('#recipe-2').toggle();
        $('#recipe-5').toggle();
        $('#recipe-6').toggle();
        $('#recipe-7').toggle();
        $('#recipe-8').toggle();
	});
	$('#checkbox6').click(function() {              
		$('#recipe-1').toggle();
        $('#recipe-2').toggle();
        $('#recipe-3').toggle();
        $('#recipe-4').toggle();
        $('#recipe-5').toggle();
        $('#recipe-6').toggle();
        $('#recipe-9').toggle();
	});

	$('#submit-button').click(function(){
		var submitEmail = $('input[name=email]').val();
		var emailResponse = "Thanks for subscribing your email " + "!";
		//$('.response').append(emailResponse) ;
		$('.response').text(emailResponse) ;
	});

	function previewFile() {
	  var preview = document.querySelector('img');
	  var file    = document.querySelector('input[type=file]').files[0];
	  var reader  = new FileReader();

	  reader.addEventListener("load", function () {
	    preview.src = reader.result;
	  }, false);

	  if (file) {
	    reader.readAsDataURL(file);
  }
}


});