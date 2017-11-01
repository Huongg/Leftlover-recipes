
$(document).ready(function(){
	
	$('#button').click(function(){
		var submitEmail = $('input[name=email]').val();
		var emailResponse = "Thanks for subscribing your email!" + submitEmail ;
		$('.response').append(emailResponse) ;

	});
});
