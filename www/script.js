
$(document).ready(function(){
	
	$('#checkbox1').click(function() { 
		$('#recipe-1').hide();
        $('#recipe-2').hide();
        $('#recipe-3').hide();
        $('#recipe-4').hide();
        $('#recipe-5').hide();
        $('#recipe-6').hide();
        $('#recipe-8').hide();
    });

	$('#checkbox2').click(function() {  
		$('#recipe-1').hide();
        $('#recipe-3').hide();
        $('#recipe-5').hide();
        $('#recipe-7').hide();
	});

	$('#checkbox3').click(function() {
		$('#recipe-2').hide();
        $('#recipe-4').hide();
        $('#recipe-6').hide();
        $('#recipe-8').hide();
        $('#recipe-9').hide();
	});

	$('#checkbox4').click(function() { 
		$('#recipe-1').hide();
        $('#recipe-3').hide();
        $('#recipe-4').hide();
        $('#recipe-7').hide();
        $('#recipe-8').hide();
        $('#recipe-9').hide();
	});

	$('#checkbox5').click(function() {   
		$('#recipe-2').hide();
        $('#recipe-5').hide();
        $('#recipe-6').hide();
        $('#recipe-7').hide();
        $('#recipe-8').hide();
	});
	$('#checkbox6').click(function() { 
		$('#recipe-1').hide();
        $('#recipe-2').hide();
        $('#recipe-3').hide();
        $('#recipe-4').hide();
        $('#recipe-5').hide();
        $('#recipe-6').hide();
        $('#recipe-9').hide();

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