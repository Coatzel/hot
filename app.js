
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

/* new game */
$(".new").click(function(){
	window.location.reload(true);
	randomAnswer();
	
});

/*random answer */

var randomAnswer = Math.floor((Math.random() * 99) + 1);
console.log(randomAnswer);



/* guess submit and clear */
$("form").on('click', '#guessButton', function(event){
	event.preventDefault();
	var submitAnswer =$("#userGuess").val();
	console.log(submitAnswer)
	$('#guessList').append('<li>'+$('#userGuess').val()+'</li>');
	$("#userGuess").val(" ");
	if (randomAnswer == submitAnswer){
		alert("Epic Win")
	};

    
  });

	

});








