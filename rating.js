$(document).ready(function(){

	$('.rating').each(function(){
		var value = $(this).attr('data-rating');
		for(var i=0; i<value; i++){
			$(this).append("<img class='icon-chef' src='./img/chef-yellow.png'/>");
		}
		for(var i=value; i<5; i++){
			$(this).append("<img class='icon-chef' src='./img/chef-grey.png'/>");
		}
		//tooltip
		$(this).append("<div class='tooltip'>tooltip</div>");
	})
})