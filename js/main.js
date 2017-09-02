// $('#xIcon').hover(function () {
//     $('#section1').stop(true, false).slideDown();
// },

// function () {
//     $('#section1').stop(true, false).slideUp();
// });

	function overlayShow() {
  		document.getElementById("overlay").className += " overlayContent";
	}

	function overlayHide() {
	  document.getElementById("overlay").classList.remove("overlayContent");
	}

$(document).ready(function() {



	// // sections sliding up
	// $('#xIcon').on('click', function(){
 //        $("#section1").slideUp(1000, function(){

 //        	//write event here for 'x' icon to now change class and be position absolute in the centre at top fixed (maybe fade in before rest of container does too to make natural transition)
 //        	$('#xIcon').addClass('stickyX')
 //        	console.log('test');


 //        	//main content fading in 
 //        	// $('#mainContent').fadeIn(1000);
 //        });    
 //    });
	
	// console.log($('#xIcon').offset().top);
	var yOffset = $('#section-2').offset().top;



	// text animate
	$(window).on('scroll', function () {  


	// Sticky xIcon class add/remove
		var scroll = $(window).scrollTop();

		console.log(scroll + '-' + yOffset);

		if(scroll >= yOffset){
			$('.xIcon').addClass('sticky');
		}else if(scroll < yOffset){
			$('.xIcon').removeClass('sticky');
			console.log('remove')
		}


	


	// Subheading slide in animations
	  if( $('.animateText').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.25) ) ){
	    $('.animateText').addClass('visible');
	  }else{
	    $('.animateText').removeClass('visible');
	  }


	  if( $('.animateText2').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.5) ) ){   
	    $('.animateText2').addClass('visible');
	  }else{
	    $('.animateText2').removeClass('visible');
	  }


	  if( $('.animateText3').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.5) ) ){  
	    $('.animateText3').addClass('visible');
	  }else{
	    $('.animateText3').removeClass('visible');
	  }

	  if( $('.animateText4').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.5) ) ){  
	    $('.animateText4').addClass('visible');
	  }else{
	    $('.animateText4').removeClass('visible');
	  }

	  if( $('.animateSection4Element').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.5) ) ){  
	    $('.animateSection4Element').addClass('visible');
	  }else{
	    $('.animateSection4Element').removeClass('visible');
	  }

	  if( $('.animateBtn').offset().top < ( $(window).scrollTop() + $(window).height() ) ){
	    $('.animateBtn').addClass('visible');
	  }else{
	    $('.animateBtn').removeClass('visible');
	  }


	});
});


	