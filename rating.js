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

/* control popup model*/
	$('.ui.rating')
       .rating({
         maxRating: 5
       });
 	  
	  $('.popup-modal').click(function() {

	    switch(currentStep)
	    {
	      case '1':
	        showFrame('https://coggle.it/diagram/Wf12Y4JbsgABTV6M/3113c9454bb650a146555747bc01a6dcf2bcd185257d47628c368dc224452122');
	        break;
	      case '2':
	      	showFrame('https://coggle.it/diagram/Wf12Y4JbsgABTV6M/3113c9454bb650a146555747bc01a6dcf2bcd185257d47628c368dc224452122');
	        break;
	      case '3':
	      	showFrame('https://coggle.it/diagram/Wf13wYJbsgABTWHP/1864ac07fe4b6273a9a9e7096e7b397c72c0a6bb942741941b434d7fd36841dc');
	        break;
	      case '4':
	      	showFrame('https://coggle.it/diagram/Wf15mVcFBgABPvcO/da7512921fcca27f56e2f161892529902d636e2ae7e3be77dc8e3533dfaef799');
	        break;
	      case '5':
	      	showFrame('https://coggle.it/diagram/Wf17dYJbsgABTWqn/f899d8f1fe17a8b8c3d139ed5771ef31a48a96c1bb3a1ec6e6d921f800655508');
	        break;
	      case '6':
	      	showFrame('https://coggle.it/diagram/Wf170IJbsgABTWvK/4f4c3d9626dd430fa5230422ef31f4f0ac41b08e5386efb1ae2088de90ba5ef2');
	        break;
	      case '7':
	      	showFrame('https://coggle.it/diagram/Wf18CbjLMQABb66i/2680b8450c1fbd589d6a79c0ebdee616677f187efabb8ef3b624f2b6de5f0d13');
	        break;
	      case '8':
	      	showFrame('https://coggle.it/diagram/Wf18aIJbsgABTW2s/221eaaaec4c0f787b40d616c679065639bfb7e075b7a4a2fe7e3fc39b14d7efd');
	        break;
	      case '9':
	      	showFrame('https://coggle.it/diagram/Wf18oVcFBgABPv2P/1e39acfaf7f6dabeef68f491399ac0cf0c28589422d8cea8f2c3219b10f67e10');
	        break;
	      case '10':
	      	showFrame('https://coggle.it/diagram/Wf184LjLMQABb7Ep/c79d890e115f4ad7c3e9666bf085908ca73afaca5a5b2ad2bc561719fc25b7b5');
	        break;
	    }
	  });

	  $('.popup-modal').magnificPopup({
	    type: 'inline',
	    preloader: false,
	    //focus: '#username',
	    midClick: true,
	    closeOnBgClick: true,
	    enableEscapeKey: 'false',
	    closeBtnInside: true,
	    fixedContentPos: true,
	    alignTop: false,
	  });  
})

/* control steps*/

var currentStep = '1';
    function setStepStatus(event,step,state){

      if(state == 'achieve'){
        if(parseInt(step) == 10){
          document.getElementById('test'+ step).className = "completed step";
          return;
        }
        currentStep = (parseInt(step)+1).toString();
        var nextStep = parseInt(currentStep);
        document.getElementById('test'+ step).className = "completed step";
      }else if(state == 'backward'){
        if(parseInt(step) == 1){
          document.getElementById('test'+ step).className = "step";
          return;
        }
        currentStep = (parseInt(step)-1).toString();
        var nextStep = parseInt(currentStep);
        document.getElementById('test'+ step).className = "step";
      }
      document.getElementById('test'+ nextStep.toString()).className = "active step";
      document.getElementById('stepNum').innerHTML = currentStep+"/10";
      if(parseInt(currentStep) == 1){
      	$("#step_back").css({"visibility":"hidden"});
      }else if(parseInt(currentStep) == 10){
      	$("#step_next").css({"visibility":"hidden"});
      }else{
      	$("#step_back").css({"visibility":"visible"});
      	$("#step_next").css({"visibility":"visible"});
      }
      /*
      * Charles: use array to encode which tools or ingredients do we need(1) or not(0). 
      */
      switch(currentStep)
      {
        case '1': 
          setinfo('Before we cook an Omlette let\'s prepare',[1,1,1],[1,1,1]);
          setImage(1);
          setText(1);
          setVideo(1);
          break;
        case '2': 
          setinfo('what should we prepare for heatting the pot',[0,0,0],[0,0,0]);
          setImage(2);
          setText(2);
          setVideo(2);
          break;
        case '3': 
          setinfo('what should we prepare for beating the egg',[1,0,0],[1,0,0]);
          setImage(3);
          setText(3);
          setVideo(3);
          break;
        case '4': 
          setinfo('what should we prepare for adding salt',[1,0,0],[0,1,0]);
          setImage(4);
          setText(4);
          setVideo(4);
          break;
        case '5': 
          setinfo('what should we prepare for adding butter',[1,0,1],[0,0,1]);
          setImage(5);
          setText(5);
          setVideo(5);
          break;
        case "6": 
          setinfo('what should we prepare for oiling the pan',[1,0,0],[0,0,0]);
          setImage(6);
          setText(6);
          setVideo(6);
          break;
        case "7": 
          setinfo('what should we prepare for pouring the egg',[1,1,1],[1,0,0]);
          setImage(7);
          setText(7);
          setVideo(7);
          break;
        case "8": 
          setinfo('what should we prepare for sauting',[1,0,0],[1,1,0]);
          setImage(8);
          setText(8);
          setVideo(8);
          break;
        case "9": 
          setinfo('what should we prepare for leaving the pan from fire',[1,0,0],[1,1,1]);
          setImage(9);
          setText(9);
          setVideo(9);
          break;
        case "10": 
          setinfo('what should we prepare for plating the omelette',[1,0,1],[1,1,1]);
          setImage(10);
          setText(10);
          setVideo(10);
          break;
        default: '1';
      }
    }

    function setinfo(title,Tools,Ingredients){
      document.getElementById('card-title').innerHTML = title;
      $(".item").hide();
      var i;
      for (i = 0; i < Tools.length; i++) { 
        if(Tools[i] == 1){
          $("#tool"+(i+1).toString()).show();
        }
      }
      for(i=0; i < Ingredients.length; i++){
        if(Ingredients[i] == 1){
          $("#Ingre"+(i+1).toString()).show();
        }
      }
    }

    function setText(step){
      document.getElementById('text').innerHTML = '';
      switch(step){
        case 1: document.getElementById('text').innerHTML = '<p class="setTextTitle">WHY:</p><p class="setText">Omelette:Its Chinese name is directly translated from English</p>';
          break;
        case 2: document.getElementById('text').innerHTML = '<p class="setTextTitle">HOW:</p><p class="setText">60C 100W</p><p class="setText">about 80 degree (medium heat).</p>';
          break;
        case 3: document.getElementById('text').innerHTML = '<p class="setTextTitle">HOW:</p><p class="setText">evenly mix two eggs in a bowl: WHY: if directly crack eggs into the pan will cause unevenly</p><p class="setText">mixture of eggs</p><p class="setText">Mix it until yolks and whites blend evenly.: Use chopsticks to beat the egg</p><p class="setText">amaintain an angle to beat the eggs.</p><p class="setTextTitle">WHAT:</p><p class="setText">mixing mechine.</p><p class="setText">No special rules for selecting eggs</p><p class="setText">chapsticks</p><p class="setTextTitle">WHEN:</p><p class="setText">beat until you can\'t see the white.</p>';
          break;
        case 4: document.getElementById('text').innerHTML = '<p class="setTextTitle">HOW:</p><p class="setText">mix the salt into eggs evenly</p><p class="setTextTitle">WHAT:</p><p class="setText">mlittle amount of it</p><p class="setText">a tea spoon</p>';
          break;
        case 5: document.getElementById('text').innerHTML = '<p class="setTextTitle">WHY:</p><p class="setText">butter makes it have milk and heavier flavor.</p><p class="setTextTitle">HOW:</p><p class="setText">OR Add vegetable oil</p><p class="setTextTitle">WHAT:</p><p class="setText">Unsalted butter</p><p class="setText">Salted butter</p>';break;
        case 6: document.getElementById('text').innerHTML = '<p>HOW:</p><p class="setText">stir the butter to let it cover all the pans</p><p class="setText">slightly use the spatula to stir it, making it evenly spread in the pan</p><p>WHEN:</p><p class="setText">stop when you see the butter turns red</p><p>WHAT: Oil:</p><p class="setText">Rapeseed oil (best): WHY: more healthy then blend oil under high temperature</p><p class="setText">liquid (prefered): WHY: easier to spread out</p><p class="setText">concrete (not recommend): WHY: have to stab to spread it out: may harm the pan</p>';
          break;
        case 7: document.getElementById('text').innerHTML = '<p>WHY:</p><p class="setText">key to the shape of omelett.</p><p>WHEN:</p><p class="setText">keep the actions for 30 secs to 1 mins</p><p>HOW:</p><p class="setText">keep stirring the eggs</p><p class="setText">do them at the same time: slowly pour mixed-egg from the pan-edge: slowly rotate the</p><p class="setText"> pan: no need  worrying about the spill</p><p class="setText">shake the pan</p><p class="setText">shake the pan: HOW: turn low er the heat: WHY: high temperature is hard to control,</p><p class="setText">egg may stick on the pan:: WHY: evenly spread mixed-egg</p><p class="setText">HOW: temperature: 100 Celsius degree: This temperature will heat the egg fast: If the</p><p class="setText">temperature is lower than 100 Celsius degree, then you have to wait longer</p>';
          break;
        case 8: document.getElementById('text').innerHTML = '<p>WHAT:</p><p class="setText">spatula</p><p>HOW:</p><p class="setText">stop moving the pan</p><p class="setText">Adjust the temperature: 100 Celsius degree might be too high...: Omelette can not be over</p><p class="setText">cooked</p><p class="setText">Fold the egg: It makes the egg look like a typical omelette: It will blend some air with the</p><p class="setText">egg while you fold it. It will taste more soft: it\'s okay to overlap the egg a little bit while</p><p class="setText">flipping, so don\'t have to haste</p><p class="setText">shake the pan: HOW: turn lower the heat: WHY: high temperature is hear to control, egg</p><p class="setText">may stick on the pan:: WHY: evenly spread mixed-egg</p><p class="setText">slightly stab on the surface, meanwhile wait the bottom to become concrete: want it in</p><p class="setText">medium: surface with liquid mixed-egg: want it to be well-done: surface without liquid</p><p class="setText">mix-egg.</p>';
          break;
        case 9: document.getElementById('text').innerHTML = '<p>WHY:</p><p class="setText">to prevent  omelette from being burnt.</p><p>WHAT:</p><p class="setText">Add tomato sauce.</p><p>WHEN:</p><p class="setText">after the surface started to pop bubbles.</p><p>HOW:</p><p class="setText">Use the remaining heat to heat the egg.</p>';
          break;
        case 10: document.getElementById('text').innerHTML = '<p>WHY:</p><p class="setText">salt: can be added if favor more harvest taste</p><p class="setText">spatula</p><p>HOW:</p><p class="setText">slide the omelette into bowl or plate</p><p class="setText">hold the pan and turn it to 3 o\'click direction</p><p class="setText">use spatula to slide the omelette out to the plate from the front of the pan</p>';
          break;
      }
    }

    function setImage(step){
      document.getElementById('screenshot').innerHTML = '';
      switch(step)
      {
        case 2: document.getElementById('screenshot').innerHTML = '<img src="img/procedural/pre_heat.png" style="height: 180px;">';break;
        case 3: document.getElementById('screenshot').innerHTML = '<img src="img/procedural/break_egg.png" style="height: 180px;">';break;
        case 4: document.getElementById('screenshot').innerHTML = '<img src="img/procedural/add_salt.png" style="height: 180px;">';break;
        case 5: document.getElementById('screenshot').innerHTML = '';break;
        case 6: document.getElementById('screenshot').innerHTML = '<img src="img/procedural/oil_pan.png" style="height: 180px; margin-right: 15px;"><img src="img/procedural/oil_pan_2.png" style="height:180">';break;
        case 7: document.getElementById('screenshot').innerHTML = '<div><img src="img/procedural/pour_egg.png" style="max-height: 180px;float: left; margin-right: 15px;"></div>';break;
        case 8: document.getElementById('screenshot').innerHTML = '<div><img src="img/procedural/to_saute.png" style="max-height: 180px;float: left; margin-right: 15px;"></div>';break;
        case 9: document.getElementById('screenshot').innerHTML = '<div><img src="img/procedural/remove_from_fire.png" style="max-height: 180px;float: left;"></div>';break;
      }
    }

    function setVideo(step){
        commands(step,0);
    }

/*enable keybroad control */
$(document).bind('keydown', function(e){
	if(e.keyCode === 32 || e.keyCode === 39){
		$( "#test"+currentStep ).on( "custom", setStepStatus);
		$( "#test"+currentStep ).trigger( "custom", [ currentStep , "achieve" ] );
	}else if(e.keyCode === 37){
		$( "#test"+currentStep ).on( "custom", setStepStatus);
		$( "#test"+currentStep ).trigger( "custom", [ currentStep , "backward" ] );
	}
});

/* popup functions */
function showFrame( url )
{
	document.getElementById('iframe').src = url;
}
function closePopup() {
	$.magnificPopup.close();
}

/* Youtube iframe player api */
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function changeVideo(text)
{
	if(player!=null)
	{
		switch(text)
		{
			case 'previousVideo': player.previousVideo(); commands(parseInt(currentStep),-1); break;
			case 'nextVideo': player.nextVideo(); commands(parseInt(currentStep),1); break;
		}
	}
	
}
/*
* Charles: video index returned from changeVideo() is always delayed one step so we need a flag to corret them.
*/
function commands(step,flag)
{
	if(player!=null)
	{
		var currentIndex = player.getPlaylistIndex();
		if(flag == 1 && currentIndex!= 2) currentIndex++;
		if(flag == -1 && currentIndex!= 0) currentIndex--;

		document.getElementById('expertNum').innerHTML = (currentIndex+1).toString()+"/3";
		$("#expert_back").css({"visibility":"visible"});
		$("#expert_next").css({"visibility":"visible"});
		if(currentIndex == 0 || step == 3 || step == 4 || step == 5){
			$("#expert_back").css({"visibility":"hidden"});
		}
		if(currentIndex == 2 || step == 3 || step == 4 || step == 5){
			$("#expert_next").css({"visibility":"hidden"});
		}

		switch(step)
		{
			case 3: 
			document.getElementById('expertNum').innerHTML = "1/1";
			player.playVideoAt(0); player.seekTo(51,true); 
			break;
			case 4: 
			document.getElementById('expertNum').innerHTML = "1/1";
			player.playVideoAt(1); player.seekTo(525,true); 
			break;
			case 5: 
			document.getElementById('expertNum').innerHTML = "1/1";
			player.playVideoAt(0); player.seekTo(103,true); 
			break;
			case 7:
			switch(currentIndex)
			{
				case 0: player.seekTo(163,true); break;
				case 1: player.seekTo(802,true); break;
				case 2: player.seekTo(142,true); break;
			}
			break;
		}
	}
}

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '315',
		width: '560',
		playerVars: {
			'controls': 1,
			'showinfo': 0,
			'rel':0,
			listType:'playlist',
			list:'PL8AKuAio0gz3FKzrh21KSxnv7m-7AFGsh',
			index:parseInt(0),
		},
		events: {
			'onReady': onPlayerReady,
		}
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}