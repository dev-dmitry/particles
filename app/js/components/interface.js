let $ = require("jquery");

$('.quantity_el').focus();

let optionsParticles = $('#options_particles');
$(document).on('keyup', function() {
    if( event.keyCode === 39 && !$('input').is( ':focus' ) ) {
        optionsParticles.animate({left: '350px'}, 400);
    }
    if( event.keyCode === 37 && !$('input').is( ':focus' )) {
        optionsParticles.animate({left: '-20px'}, 400);
    }	    	
});
$('#play-options, #options_particles .back').on('click',function() {
    if ( optionsParticles.position().left < 0 ) {
        optionsParticles.animate({left: '350px'}, 400);
	}else{
        optionsParticles.animate({left: '-20px'}, 400);
	}
});	
$('.title-project a, #description .back').on('click', function() {
	let description = $('#description');
	if ( description.position().left < 0 ) {
        description.animate({left: '350px'}, 400);
	}else{
        description.animate({left: '-210px'}, 400);
	}	
});
$('#options-block').on('click', '.particles_link', function(e){
	if ( !$(this).next().hasClass('active') ) {
		$(this).next().addClass('active');
    	$('.particles_link').next().slideUp(500);
    	$(this).next().slideDown(500);
	}else{
    	$(this).next().slideUp(500);
    	$(this).next().removeClass('active');
    }
});
