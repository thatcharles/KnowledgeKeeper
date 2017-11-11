$(document).ready(function(){

	$('.rating').each(function(){
		var value = $(this).attr('data-rating');
		for(var i=0; i<value; i++){
			$(this).append("<img class='icon-chef' src='./img/chef-yellow.png'/>");
		}
		for(var i=value; i<5; i++){
			$(this).append("<img class='icon-chef' src='./img/chef-grey.png'/>");
		}
	})
	var count = 0;
	$('.rating').mouseenter(function(){
		count++;
		var position = $(this).offset();
		var height = 95; //set tooltip's height here
		var top = position.top-height
		$('#tooltip').offset({top:top,left:position.left})
		$('#tooltip').css('visibility', 'visible')
	});
	$('#tooltip').mouseenter(function(){
		count++;
		$('#tooltip').css('visibility', 'visible')
	}).mouseleave(function(){
		count = 0;
		$('#tooltip').css('visibility', 'hidden')
	})
	$('.rating').mouseleave(function(){
		if(count==1){
			count = 0;
			$('#tooltip').css('visibility', 'hidden')
		}
	})
})