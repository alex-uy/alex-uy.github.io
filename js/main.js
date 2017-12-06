	

	function overlayShow() {
  		document.getElementById("overlay").className += " overlayContent";
	}

	function overlayHide() {
	  document.getElementById("overlay").classList.remove("overlayContent");
	}

$(document).ready(function() {
	
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


	// Main Animations

	  if( $('.animateTopFill').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.3) ) ){
	    $('.animateTopFill').addClass('visible');
	  }else{
	    $('.animateTopFill').removeClass('visible');
	  }

	  if( $('.animateImage1').offset().top < ( $(window).scrollTop() + ($(window).height() / 2.5) ) ){
	    $('.animateImage1').addClass('visible');
	  }else{
	    $('.animateImage1').removeClass('visible');
	  }

	  if( $('.animateText').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.25) ) ){
	    $('.animateText').addClass('visible');
	  }else{
	    $('.animateText').removeClass('visible');
	  }

	  if( $('.animateBody1').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.25) ) ){
	    $('.animateBody1').addClass('visible');
	  }else{
	    $('.animateBody1').removeClass('visible');
	  }


	  if( $('.animateText2').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.2) ) ){   
	    $('.animateText2').addClass('visible');
	  }else{
	    $('.animateText2').removeClass('visible');
	  }


	  if( $('.animateText3').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.2) ) ){  
	    $('.animateText3').addClass('visible');
	  }else{
	    $('.animateText3').removeClass('visible');
	  }

	  if( $('.animateText4').offset().top < ( $(window).scrollTop() + ($(window).height() / 2) ) ){  
	    $('.animateText4').addClass('visible');
	  }else{
	    $('.animateText4').removeClass('visible');
	  }

	  if( $('.animateSection4Element').offset().top < ( $(window).scrollTop() + ($(window).height() / 1.5) ) ){  
	    $('.animateSection4Element').addClass('visible');
	  }else{
	    $('.animateSection4Element').removeClass('visible');
	  }

	  if( $('.animateImage2').offset().top < ( $(window).scrollTop() + ($(window).height() / 2) ) ){  
	    $('.animateImage2').addClass('visible');
	  }else{
	    $('.animateImage2').removeClass('visible');
	  }

	  if( $('.animateBtn').offset().top < ( $(window).scrollTop() + $(window).height() ) ){
	    $('.animateBtn').addClass('visible');
	  }else{
	    $('.animateBtn').removeClass('visible');
	  }

	  if( $('.animateBottomFill').offset().top < ( $(window).scrollTop() + $(window).height() / 1.2 ) ){
	    $('.animateBottomFill').addClass('visible');
	  }else{
	    $('.animateBottomFill').removeClass('visible');
	  }

	  if( $('.animateImageBottom').offset().top < ( $(window).scrollTop() + $(window).height() / 1.2 ) ){
	    $('.animateImageBottom').addClass('visible');
	  }else{
	    $('.animateImageBottom').removeClass('visible');
	  }



	});
});

	// Portfolio Grid



	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.element-item',
	  layoutMode: 'fitRows'
	});
	// filter functions
	var filterFns = {};

	// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');

	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});




	