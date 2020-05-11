    $(document).ready(function(){
		/* Menú Cortina */
		$('#menu-cortina').css('right','-290px');
		$('#cerrar').hide();
		
		$('#abrir').click(function(){
			$('#menu-cortina').animate({
				right: 0
			},800,'easeOutExpo');
			$('#abrir').hide();
			$('#cerrar').show();
			event.preventDefault();
		});
		
		$('#cerrar').click(function(){
			$('#menu-cortina').animate({
				right: -290
			},800,'easeOutExpo');
			$('#abrir').show();
			$('#cerrar').hide();
			event.preventDefault();
		});
		
		/**/
		
		/* Animación de Enlaces */
		$('#menu-moviles a, #menu-principal a').bind('click',function(event){
			var $anchor = $(this);  
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000,'easeOutExpo');
			event.preventDefault();
		});
	});