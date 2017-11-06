
$(document).ready(function(){
	
	$('#checkbox2').click(function() {              
		$('#recipe-2').toggle();
        $('#recipe-3').toggle();
        $('#recipe-4').toggle();
	});

	$('#checkbox5').click(function() {              
		$('#recipe-5').toggle();
        $('#recipe-6').toggle();
	});


	$('#button').click(function(){
		var submitEmail = $('input[name=email]').val();
		var emailResponse = "Thanks for subscribing your email " + "!";
		//$('.response').append(emailResponse) ;
		$('.response').text(emailResponse) ;
	});

});
